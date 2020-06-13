<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Member;
use Illuminate\Support\Facades\Cache;
use Illuminate\Http\Request;

class AdminCommentController extends Controller
{
    //действия с комментарием
    const APPROVE_COMMENT = 1;
    const CHANGE_AND_APPROVE_COMMENT = 2;
    const DELETE_COMMENT = 3;

    public function index()
    {
        $comments = Comment::new()->with('post', 'member')->get();
        return view('admin.comment.new-comments', compact('comments'));
    }

    public function commentAction(Request $request)
    {
        $action = $request->input('comment_action');
        $commentId = $request->input('comment_id');
        $commentText = $request->input('comment_text');
        $banReason = $request->input('why_pidor');
        $memberId = $request->input('member_id');

        switch ($action) {
            case self::APPROVE_COMMENT:
                $comment = Comment::with('post')->find($commentId);
                $comment->is_new = 0;
                $comment->accepted = 1;
                $comment->save();
                Cache::forget(PostController::CACHE_PREFIX_TOTAL_COMMENTS.$comment->post->translate_title);
                if ($comment->level < 1) {
                    Cache::forget(PostController::CACHE_PREFIX_0_LEVEL_COMMENTS.$comment->post->translate_title);
                }
                echo 'Комментарий успешно одобрен';
                break;
            case self::CHANGE_AND_APPROVE_COMMENT:
                $comment = Comment::with('post')->find($commentId);
                $comment->is_new = 0;
                $comment->accepted = 1;
                $comment->comment_text = $commentText;
                $comment->save();
                Cache::forget(PostController::CACHE_PREFIX_TOTAL_COMMENTS.$comment->post->translate_title);
                if ($comment->level < 1) {
                    Cache::forget(PostController::CACHE_PREFIX_0_LEVEL_COMMENTS.$comment->post->translate_title);
                }
                echo 'Комментарий успешно одобрен';
                break;
            case self::DELETE_COMMENT:
                $member = Member::find($memberId);
                $member->pidor_reason = $banReason;
                $member->pidor = 1;
                $member->save();
                Comment::destroy($commentId);
                echo 'Комментарий успешно удален. Комментатору бан.';
                break;
        }
    }
}
