<?php
use App\Http\Helpers\PageHelper;
?>
<ul class="b-comments__list b-answer">
    @foreach($comments as $comment)
        <li id="comment-{{ $comment->id }}" class="b-comments__list-item b-answer b-answer__block">
            <div class="b-comments__list-item-body">
                <div class="b-comments__list-item-body-meta">
                    <div class="b-comments__list-item-body-author">
                        <span class="b-comments__list-item-body-author-name">
                            {{ $comment->member->name }}
                        </span><!--/.b-comments__list-item-body-author-name-->
                    </div><!-- .comment-author -->
                    <span class="comment-metadata b-comments__list-item-body-time">
                        {{ PageHelper::getDateDiff($comment->created_at) }}
                    </span>
                </div><!-- .comment-meta -->

                <div class="b-comments__list-item-body-content b-typography b-typography__paragraph">
                    {{ $comment->comment_text }}
                </div><!-- .comment-content -->

                <div class="b-comments__list-item-body-reply">
                    <span class="b-comments__list-item-body-reply-link b-typography__link b-answer__button">Ответить</span>
                </div>
            </div><!-- .b-comments__list-item-body -->
            @if(!empty($comment->childComments))
                <ol class="b-comments__list b-comments__list_children">
                    @foreach($comment->childComments as $childComment)
                        <li id="comment-{{ $childComment->id }}" class="b-comments__list-item b-answer b-answer__block">
                            <div class="b-comments__list-item-body">
                                <div class="b-comments__list-item-body-meta">
                                    <div class="b-comments__list-item-body-author">
                                        <span class="b-comments__list-item-body-author-name">
                                            {{ $childComment->member->name }}
                                        </span><!--/.b-comments__list-item-body-author-name-->
                                    </div><!-- .comment-author -->
                                    <span class="comment-metadata b-comments__list-item-body-time">
                                        {{ PageHelper::getDateDiff($childComment->created_at) }}
                                    </span>
                                </div><!-- .comment-meta -->
                                <div class="b-comments__list-item-body-content b-typography b-typography__paragraph">
                                    {{ $childComment->comment_text }}
                                </div><!-- .comment-content -->
                            </div><!-- .b-comments__list-item-body -->
                        </li><!-- #comment-## -->
                    @endforeach
                </ol>
            @endif
        </li><!-- #comment-## -->
    @endforeach
</ul>
@if($page < $pages)
    <a href="/more-comments" class="b-load-more-comments b-load-more-comments_older b-button b-load-more-comments__button"
        post_id="{{ $postId }}" pages = {{ $pages }} page="{{ $page }}">
        ▼ Показать еще комментарии ▼
    </a>
@endif
