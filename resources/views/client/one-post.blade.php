<?php
use App\Http\Helpers\PageHelper;
?>
@extends('client')

@section('title') {{ $post->meta_title }} @endsection
@section('description') {{ $post->meta_description }} @endsection
@section('canonicalLink') <link href="{{PageHelper::getProtocol().$_SERVER['SERVER_NAME'].'/post/'.$post->translate_title}}" rel="canonical"> @endsection
@section('content')
<div class="b-page__body-content b-grid__col b-grid__col_size_12 b-grid__col_size_lg-8">
    <div itemscope="" itemtype="https://schema.org/Article">
        <div itemscope="" itemprop="mainEntityOfPage" itemtype="https://schema.org/WebPage" itemid="{{PageHelper::getProtocol().$_SERVER['SERVER_NAME'].'/post/'.$post->translate_title}}"></div>
        <nav class="b-breadcrumbs" itemprop="articleSection">
            <ul class="b-breadcrumbs__list">
                <li class="b-breadcrumbs__item"><a class="b-breadcrumbs__link b-typography__link" href="/">Главная</a></li>
                <li class="b-breadcrumbs__item">
                    <a class="b-breadcrumbs__link b-typography__link" href="/category/{{$post->category->translate_name}}">{{$post->category->name}}</a>
                </li>
            </ul><!--/.b-breadcrumbs__list-->
        </nav><!--/.b-breadcrumbs-->

        <div class="b-post b-post_full">
            <h1 class="b-post__title b-font b-font_family_caption" itemprop="headline">{{ $post->title }}</h1>
            <div class="b-post__meta">
                <time class="b-post__meta-item b-post__meta-date" itemprop="datePublished" datetime="{{ date('c', strtotime($post->created_at)) }}" title="{{ PageHelper::getDateWithRusMonth(date('j.m.Y г.', strtotime($post->created_at)), date('.m.', strtotime($post->created_at))) }}">
                    {{ PageHelper::getDateDiff($post->created_at) }}
                </time>
                <span class="b-post__meta-item b-post__meta-comments">@if ($totalCommentsCount) {{ $totalCommentsCount .' '. PageHelper::rightWord($totalCommentsCount, ['комментарий', 'комментария', 'комментариев'])}} @else Нет комментариев @endif</span>
                <span class="b-post__meta-item">{{$post->views .' '. PageHelper::rightWord($post->views, ['просмотр', 'просмотра', 'просмотров']) }}</span>
            </div><!--/.b-post__meta-->
            <div itemprop="publisher" itemscope="" itemtype="https://schema.org/Organization">
                <link itemprop="url" href="{{ PageHelper::getProtocol().$_SERVER['SERVER_NAME'] }}/">
                <div itemprop="logo" itemscope="" itemtype="https://schema.org/ImageObject">
                    <a itemprop="image" href="/storage/images/valknut.jpg"></a>
                    <a itemprop="url" href="/storage/images/valknut.jpg"></a>
                    <meta itemprop="width" content="100">
                    <meta itemprop="height" content="100">
                </div>
                <meta itemprop="address" content="{{ PageHelper::getProtocol().$_SERVER['SERVER_NAME'] }}/">
                <meta itemprop="telephone" content="">
                <meta itemprop="name" content="Stan">
            </div>

            <div class="b-post__image-link">
                <img width="730" height="410" src="{{ $post->image_path }}" class="b-post__image wp-post-image" alt="{{ $post->img_alt }}" title="{{ $post->img_title }}" itemprop="image">
            </div><!--/.b-post__image-link-->


            <div class="b-post__content b-nocopy">
                <div class="b-typography b-font b-font_size_content b-post-incut" itemprop="articleBody">
                    {!! $post->post_text !!}
                </div><!--/.b-typography-->
            </div><!--/.b-post__content-->
        </div><!--/.b-post-->
        @if(!empty($prev) || !empty($next))
            <div class="b-prev-next">
                @if(!empty($prev))
                    <a class="b-prev-next__item b-prev-next__item_prev b-small-post" href="/post/{{ $prev->translate_title }}">
                        <img class="b-prev-next__item-thumb b-small-post__image" data-lazy-src="{{ PageHelper::getSmallImagePath($prev->image_path) }}" />
                        <span class="b-prev-next__item-label"></span>
                        <span class="b-small-post__title b-typography__link">{{ $prev->title }}</span>
                    </a><!--/.b-prev-next__item-->
                @endif
                @if(!empty($next))
                    <a class="b-prev-next__item b-prev-next__item_next b-small-post" href="/post/{{ $next->translate_title }}">
                        <img class="b-prev-next__item-thumb b-small-post__image" data-lazy-src="{{ PageHelper::getSmallImagePath($next->image_path) }}" />
                        <span class="b-prev-next__item-label"></span>
                        <span class="b-small-post__title b-typography__link">{{ $next->title }}</span>
                    </a><!--/.b-prev-next__item-->
                @endif
            </div>
        @endif
    </div>

    <div class="b-comments" id="comments">
        <p class="b-comments__title b-font b-font_family_caption">@if ($totalCommentsCount) {{ $totalCommentsCount .' '. PageHelper::rightWord($totalCommentsCount, ['комментарий', 'комментария', 'комментариев'])}} @else Нет комментариев @endif</p>
        @if ($totalCommentsCount)
            @include('client._comments')
        @endif
        <div id="comment-form" class="b-comments__respond">
            <p id="reply-title" class="b-comments__respond-title b-font b-font_family_caption">Добавить комментарий</p>

            <form id="w0" class="b-comments__respond-form" action="/add-comment" method="post">
                <p class="b-comments__respond-form-row b-form__row">
                    <input id="commentform-name" type="text" name="name" required placeholder="Имя или ник" class="b-comments__respond-form-input b-form__input">
                    <input id="commentform-email" type="text" name="email" required placeholder="Действующий email" class="b-comments__respond-form-input b-form__input">
                    <textarea id="commentform-text" class="b-comments__respond-form-input b-form__input b-form__input_type_area b-autogrow b-send-login__text-input" name="CommentForm[text]" placeholder="Ваше сообщение..." required style="height: 84px;"></textarea>
                </p>
                <p class="b-comments__respond-form-row">
                    <a id="sendComment" href="/add-comment" class="b-popup_comment b-comments__respond-form-submit b-button">Отправить комментарий</a>
                    <span class="b-typography__link b-answer__delete b-comments__answer-cancel b-comments__answer-cancel_hide">Отменить</span>
                    <input type="hidden" id="commentform-id_parent" class="b-answer__input b-send-login__answer-input" name="CommentForm[id_parent]">
                    <input type="hidden" id="post_id" name="post_id" value="{{ $postId }}">
                </p>

            </form>
        </div>
    </div>
</div><!--/.b-grid__col-->
@endsection
