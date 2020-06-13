<?php
use App\Http\Controllers\AdminCommentController;
?>
@extends('admin')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                @if(session()->get('success'))
                    <div class="alert alert-success">
                        {{ session()->get('success') }}
                    </div>
                @endif
            </div>
        </div>
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading">Комментарии</div>

                    <div class="panel-body">
                        @csrf
                        @foreach($comments as $comment)
                            <div>
                                <i>Статья</i> <b>{{ $comment->post->title }}</b>
                                <br>
                                <i>Автор</i> <b>{{ $comment->member->name }} / {{ $comment->member->email }} / {{ $comment->member->ip }}</b>
                                <br>
                                <textarea class="admin-comment">{{ $comment->comment_text }}</textarea>
                                <br>
                                <a href="{{ route('commentAction', [], false) }}" class="btn btn-success btn-sm align-self-center commentAction"
                                    action="{{ AdminCommentController::APPROVE_COMMENT }}" comment-id="{{ $comment->id }}">
                                    Одобрить комментарий
                                </a>
                                <a href="{{ route('commentAction', [], false) }}" class="btn btn-info btn-sm align-self-center commentAction"
                                   action="{{ AdminCommentController::CHANGE_AND_APPROVE_COMMENT }}" comment-id="{{ $comment->id }}">
                                    Редактировать и одобрить комментарий
                                </a>
                                <br>
                                <input type="text" class="pidor_comment" placeholder="Из-за чего комментатор пидор" value="">
                                <a href="{{ route('commentAction', [], false) }}" class="btn btn-danger btn-sm align-self-center commentAction"
                                   action="{{ AdminCommentController::DELETE_COMMENT }}" comment-id="{{ $comment->id }}" member-id="{{ $comment->member->id }}">
                                    Удалить комментарий
                                </a>
                            </div>
                            <hr>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('jsScripts')
    <script>
      $(document).ready(function () {
        $('.commentAction').on("click", function (e) {
          e.preventDefault(); // avoids calling preview.php
          let data = {
            "_token": $('[name = "_token"]').val(),
            "comment_action": $(this).attr('action'),
            "comment_id": $(this).attr('comment-id'),
            "comment_text": $($(this).prevAll('textarea')[0]).val(),
            "why_pidor": $(this).prev('input').val(),
            "member_id": $(this).attr('member-id')
          };
          $.ajax({
            type: "POST",
            cache: false,
            url: $(this).attr('href'), // preview.php
            data: data, // all form fields
            success: function (data) {
              alert(data);
              location.reload();
            }, // success
            error: function(msg) {
              $('#sendComment').removeClass("b-load-more-comments_state_loading");
            } //error
          }); // ajax
        }); // on
      }); // ready

    </script>
@endsection