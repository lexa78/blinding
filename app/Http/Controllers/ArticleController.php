<?php

namespace App\Http\Controllers;

use App\Category;
use App\Post;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ArticleController extends Controller
{
    const ARTICLES_ON_PAGE = 15;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $articles = Post::paginate(self::ARTICLES_ON_PAGE);
        return view('admin.article.index', compact('articles'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::all();
        $directories = Storage::directories(PictureController::PUBLIC_IMAGES_DIR);
        if (!empty($directories)) {
            $directories = array_map(['App\Http\Controllers\PictureController', 'removeFirstFolders'], $directories);
        }
        return view('admin.article.create', compact('categories', 'directories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $postTitle = $request->get('title');
        $imgPath = $request->get('folderWithImg');
        $postTitleTranslate = Str::slug($postTitle);
        $request = $request->toArray();
        $request['image_path'] = $imgPath;
        $request['translate_title'] = $postTitleTranslate;
        $post = new Post($request);
        try {
            $post->save();
        } catch (QueryException $e) {
            Log::notice('Попытка добавления статьи с таким же названием "'.$post->title.'" Статья не добавлена. Текст ошибки:'.$e->getMessage());
            return redirect()->route( 'articles.index', [] )->with('error', 'Статья НЕ сохранена! Похоже, что есть уже статья с таким названием');
        }
        return redirect()->route( 'articles.index', [] )->with('success', 'Статья сохранена!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $article = Post::find($id);
        $categories = Category::all();
        return view('admin.article.edit', compact('article', 'categories'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $article = Post::find($id);
        $request = $request->toArray();
        if (!isset($request['published'])) {
            $request['published'] = 0;
        }
        $article->update($request);
        $article->save();
        Cache::tags(['posts', 'single'])->put($article->translate_title, $article, PostController::CACHE_STORE_VIEWS_SECONDS);
        return redirect()->route( 'articles.index', [] )->with('success', 'Статья изменена!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getImagesFromFolder(Request $request)
    {
        $folder = $request->input('folder');
        $files = Storage::files(PictureController::PUBLIC_IMAGES_DIR.$folder);
        if (!empty($files)) {
            $files = array_map(['App\Http\Controllers\ArticleController', 'removePublicFolder'], $files);
        }
        echo json_encode($files);
        exit;
    }

    private static function removePublicFolder($item)
    {
        return str_replace('public/', '/storage/', $item);
    }
}
