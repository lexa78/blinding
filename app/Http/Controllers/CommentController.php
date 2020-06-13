<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Member;
use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class CommentController extends Controller
{
    public function getMoreComments(Request $request)
    {
        $postId = (int) $request->input('postId');
        $pages = (int) $request->input('pages');
        $page = (int) $request->input('page');
        if (!$postId || !$pages || !$page) {
            return '';
        }
        $skip = PostController::COMMENTS_COUNT_ON_PAGE * $page;
        $comments = Comment::with(['childComments' => function ($query) {
            $query->accepted()
                ->orderBy('created_at', 'desc');
        }, 'member'])
            ->accepted()
            ->where('level', 0)
            ->where('post_id', $postId)
            ->orderBy('created_at', 'desc')
            ->skip($skip)
            ->take(PostController::COMMENTS_COUNT_ON_PAGE)
            ->get();
        $page++;

        return view('client._comments', compact('comments', 'comments0LevelCount',
            'postId', 'page', 'pages'));
    }

    public function addComment(Request $request) {
        $validator = Validator::make($request->all(), [
            'comment_name' => 'required',
            'comment_email' => 'required|email',
            'comment_text' => 'required',
        ], [
            'comment_name.required' => 'Напишите пожалуйста ваше имя',
            'comment_email.required' => 'Напишите пожалуйста ваш email',
            'comment_email.email' => 'Напишите пожалуйста корректный email',
            'comment_text.required' => 'Напишите пожалуйста текст вашего сообщения',
        ]);

        if ($validator->fails()) {
            $messageTitle = 'Комментарий не отправлен!';
            $errors = $validator->errors();
            $mess = '';
            foreach ($errors->all() as $message) {
                $mess .= '<span class="error-message">'.$message .'</span><br><br>';
            }
            $this->sendMessage($messageTitle, $mess, 'error-message-block');
        }

        $text = $request->input('comment_text');
        $memberName = $request->input('comment_name');
        $memberEmail = $request->input('comment_email');
        $commentParentId = (int) $request->input('comment_parent_id');
        $postId = (int) $request->input('post_id');
        $ip = $request->ip();

        $memberData = [
            [
                'name' => $memberName,
                'email' => $memberEmail,
                'updated_at' => date('Y-m-d H:i:s'),
            ],
        ];
        if ($ip) {
            $memberData[0]['ip'] = $ip;
        }
        Member::insertIgnore($memberData);
        $member = Member::where('email', $memberEmail)->first();

        $post = Post::find($postId);
        if (!$post) {
            $post = Post::limit(1)->first();
            $postId = $post->id;
            $alertText = 'Попытка подмены id поста.';
            $this->logging($ip, $memberName, $memberEmail, $alertText);
            $member->pidor = 1;
            $member->pidor_reason = $alertText;
            $member->save();
        }
        unset($post);

        if ($commentParentId) {
            $comment = Comment::find($commentParentId);
            if (!$comment) {
                $commentParentId = null;
                $alertText = 'Попытка подмены id родительского комментария.';
                $this->logging($request, $memberName, $memberEmail, $alertText);
                $member->pidor = 1;
                $member->pidor_reason = $alertText;
                $member->save();
            }
            unset($comment);
        }
        $createCommentData = [
            'comment_text'  => $text,
            'post_id' => $postId,
            'member_id' => $member->id,
        ];
        if (empty($commentParentId)) {
            $createCommentData['level'] = 0;
        } else {
            $createCommentData['level'] = 1;
            $createCommentData['parent_id'] = $commentParentId;
        }
        Comment::create($createCommentData);

        $messageTitle = 'Спасибо за отзыв!';
        $message = 'Ваш комментарий отправлен на модерацию.';
        $this->sendMessage($messageTitle, $message, 'success-message-block');
    }

    private function sendMessage($messageTitle, $message, $class)
    {
        echo "<div class=\"message-block {$class}\"><h3>{$messageTitle}</h3><br>{$message}</div>";
        exit;
    }

    private function logging($ip, $memberName, $memberEmail, $text)
    {
        $uri = url()->previous();
        Log::alert($text.PHP_EOL.'Запрос со страницы '.$uri.PHP_EOL.
            'Его имя '.$memberName.PHP_EOL.'Его email '.$memberEmail.PHP_EOL.'Его ip '.$ip);
    }

    public function blogSubscribe(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'agree' => 'required',
        ], [
            'name.required' => 'Напишите пожалуйста ваше имя',
            'email.required' => 'Напишите пожалуйста ваш email',
            'email.email' => 'Напишите пожалуйста корректный email',
            'agree.required' => 'Установите пожалуйста флажок, давая согласие на обработку ваших данных',
        ]);

        if ($validator->fails()) {
            $messageTitle = 'Вы НЕ подписаны!';
            $errors = $validator->errors();
            $mess = '';
            foreach ($errors->all() as $message) {
                $mess .= '<span class="error-message">'.$message .'</span><br><br>';
            }
            $this->sendMessage($messageTitle, $mess, 'error-message-block');
        }

        $memberName = $request->input('name');
        $memberEmail = $request->input('email');
        $ip = $request->ip();

        $memberData = [
            [
                'name' => $memberName,
                'email' => $memberEmail,
                'updated_at' => date('Y-m-d H:i:s'),
                'signed' => 1,
            ]
        ];
        if ($ip) {
            $memberData[0]['ip'] = $ip;
        }
        Member::insertOnDuplicateKey($memberData, ['signed']);

        $messageTitle = 'Спасибо! Вы подписаны!';
        $message = 'Теперь вы сможете первым узнавать много новой информации.';
        $this->sendMessage($messageTitle, $message, 'success-message-block');
    }
}
