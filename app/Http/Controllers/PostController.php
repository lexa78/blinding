<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Post;
use App\PostsRepository;
use App\SearchQuery;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;


class PostController extends Controller
{
    const POSTS_COUNT_ON_PAGE = 10;
    const CACHE_STORE_VIEWS_SECONDS = 10800; //3 часа хранится пост с просмотрами и комментарии
    const CACHE_STORE_PREV_NEXT_POSTS_SECONDS = 86400; //сутки хранятся предудущие и следующие посты
    const CACHE_PREFIX_PREV = '_prev_';
    const CACHE_PREFIX_NEXT = '_next_';
    const CACHE_PREFIX_TOTAL_COMMENTS = 'total_comments_';
    const CACHE_PREFIX_0_LEVEL_COMMENTS = '0_level_comments_';
    const COMMENTS_COUNT_ON_PAGE = 10;
    const SESSION_SEARCH_QUERY = 'searchQuery';
    const SESSION_FOUND_POSTS_ID = 'foundPostIds';
    const SEARCH_QUERY_LENGTH = 100;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::with(['comments' => function($query) {
            $query->where('accepted', 1);
        }])->publish()->orderby('created_at', 'desc')->paginate(self::POSTS_COUNT_ON_PAGE);
        $viewsCache = Cache::tags(['posts', 'views']);
        return view('client.posts-list', compact('posts', 'viewsCache'));
    }

    /**
     * Display a listing of the resource in needle category.
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function postsInCategory($id)
    {
        $posts = Post::with(['comments' => function($query) {
            $query->where('accepted', 1);
        }])->publish()->whereHas('category', function (Builder $query) use ($id) {
            $query->where('id', '=', $id);
        })->orderby('created_at', 'desc')->paginate(self::POSTS_COUNT_ON_PAGE);
        $viewsCache = Cache::tags(['posts', 'views']);
        return view('client.posts-list', compact('posts', 'viewsCache'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $viewsCache = Cache::tags(['posts', 'views']);

        $post = Cache::tags(['posts', 'single'])
            ->remember($id, self::CACHE_STORE_VIEWS_SECONDS, function() use ($id, $viewsCache) {
                // получаем запись
                $post = Post::with('category')->where('translate_title', $id)->first();

                // пишем в базу число из кеша
                if(($views = $viewsCache->get($post->translate_title, 0)) > $post->views) {
                    $post->views = $views;
                    $post->save();
                }

                // добавялем число в кеш
                $viewsCache->forever($post->translate_title, $post->views);

                return $post;
            });

        $viewsCache->increment($post->translate_title); // +1 просмотр
        $post->views = $viewsCache->get($post->translate_title); // поместим актуальное число в модель

        $prev = Cache::remember(self::CACHE_PREFIX_PREV.$post->translate_title, self::CACHE_STORE_PREV_NEXT_POSTS_SECONDS, function () use ($post) {
            return Post::publish()
                ->where('created_at', '<', $post->created_at)
                ->orderby('created_at', 'desc')
                ->limit(1)->first();
        });

        $next = Cache::remember(self::CACHE_PREFIX_NEXT.$post->translate_title, self::CACHE_STORE_PREV_NEXT_POSTS_SECONDS, function () use ($post) {
            return Post::publish()
                ->where('created_at', '>', $post->created_at)
                ->orderby('created_at', 'asc')
                ->limit(1)->first();
        });

        $totalCommentsCount = Cache::remember(self::CACHE_PREFIX_TOTAL_COMMENTS.$post->translate_title, self::CACHE_STORE_VIEWS_SECONDS, function () use ($post) {
            return Comment::accepted()
                ->where('post_id', $post->id)
                ->count();
        });

        $comments = [];
        $pages = 1;
        if ($totalCommentsCount) {
            $comments0LevelCount = Cache::remember(self::CACHE_PREFIX_0_LEVEL_COMMENTS.$post->translate_title, self::CACHE_STORE_VIEWS_SECONDS, function () use ($post) {
                return Comment::accepted()
                    ->where('level', 0)
                    ->where('post_id', $post->id)
                    ->count();
            });

            $comments = Comment::with(['childComments' => function ($query) {
                $query->accepted()
                    ->orderBy('created_at', 'desc');
            }, 'member'])
                ->accepted()
                ->where('level', 0)
                ->where('post_id', $post->id)
                ->orderBy('created_at', 'desc')
                ->limit(self::COMMENTS_COUNT_ON_PAGE)
                ->get();

            if ($comments0LevelCount) {
                $pages = ceil($comments0LevelCount / self::COMMENTS_COUNT_ON_PAGE);
            }
        }
        $postId = $post->id;
        $page = 1;
        return view('client.one-post', compact('post', 'prev', 'next', 'comments', 'totalCommentsCount',
            'postId', 'page', 'pages'));
    }

    public function search(Request $request, PostsRepository $repository)
    {
        $page = $request->input('page');
        $query = trim($request->input('s'));
        if (empty($query) && empty($page)) {
            $posts = $this->getPosts([]);
        } else {
            if (empty($page)) {
                $ip = $request->ip();
                if (mb_strlen($query) > self::SEARCH_QUERY_LENGTH) {
                    $query = mb_substr($query, 0, 99);
                }
                $searchData = [
                    'query' => $query,
                ];
                if (!empty($ip)) {
                    $searchData['ip'] = $ip;
                }
                SearchQuery::create($searchData);
                $postIds = $repository->search($query);
                session([self::SESSION_SEARCH_QUERY => $query]);
                session([self::SESSION_FOUND_POSTS_ID => $postIds]);
                $posts = $this->getPosts($postIds);
            } else {
                $query = session(self::SESSION_SEARCH_QUERY);
                $postIds = session(self::SESSION_FOUND_POSTS_ID);
                $posts = $this->getPosts($postIds);
            }
        }
        $viewsCache = Cache::tags(['posts', 'views']);
        return view('client.posts-list', compact('posts', 'viewsCache', 'query'));
    }

    private function getPosts($postIds)
    {
        return Post::with(
            [
                'comments' => function ($query) {
                    $query->where('accepted', 1);
                }
            ]
        )->publish()
            ->whereIn('id', $postIds)
            ->orderby('created_at', 'desc')
            ->paginate(self::POSTS_COUNT_ON_PAGE);
    }
}
