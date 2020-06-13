<?php
use App\Http\Helpers\PageHelper;
if (!isset($query)) {
    $query = null;
}
?>
@extends('client')

@section('title') Оставленные записки @endsection
@section('description') Понемногу обо всем @endsection
@section('css') <link href="{{ asset('/css/customPaginator.css') }}" rel="stylesheet"> @endsection
@section('searchQuery') {{ $query }} @endsection

@section('content')
    <div class="b-page__body-content b-grid__col b-grid__col_size_12 b-grid__col_size_lg-8">


        <div class="post-list">
            @if(!count($posts))
                <div class="b-post__content">
                    <div class="b-post__intro b-typography b-typography__paragraph" itemprop="description">
                        Ничего не найдено
                    </div>
                </div>
            @else
                @foreach($posts as $post)
                <div class="b-post b-post_excerpt" itemscope="" itemtype="https://schema.org/BlogPosting">
                    <div itemscope="" itemprop="mainEntityOfPage" itemtype="https://schema.org/WebPage" itemid="{{ PageHelper::getProtocol().$_SERVER['SERVER_NAME'].'/post/'.$post->translate_title }}"></div>

                    <a class="b-post__image-link" href="{{ route('post.show', ['id' => $post->translate_title], false) }}">
                        <img width="730" height="410" src="{{ $post->image_path }}" class="b-post__image wp-post-image" alt="{{ $post->img_alt }}" title="{{ $post->img_title }}" itemprop="image">
                    </a><!--/.b-post__image-link-->

                    <div class="b-post__content">
                        <h2 class="b-post__title b-font b-font_family_caption" itemprop="headline">
                            <a class="b-post__title-link" href="{{ route('post.show', ['id' => $post->translate_title], false) }}" itemprop="url">{{ $post->title }}</a>
                        </h2>
                        <div class="b-post__meta">
                            <meta itemprop="dateModified" content="{{ $post->updated_at }}">
                            <time class="b-post__meta-item b-post__meta-date" itemprop="datePublished" datetime="{{ date('c', strtotime($post->created_at)) }}">{{ PageHelper::getDateDiff($post->created_at) }}</time>
                            <?php $commentsCount = count($post->comments); ?>
                            <span class="b-post__meta-item b-post__meta-comments">@if ($commentsCount) {{ $commentsCount .' '. PageHelper::rightWord($commentsCount, ['комментарий', 'комментария', 'комментариев'])}} @else Нет комментариев @endif</span>
                            <?php
                                $views = $viewsCache->get($post->translate_title);
                                if (!$views) {
                                    $views = 0;
                                }
                            ?>
                            <span class="b-post__meta-item">{{ $views .' '. PageHelper::rightWord($views, ['просмотр', 'просмотра', 'просмотров'])}}</span>
                        </div><!--/.b-post__meta-->
                        <div class="b-post__intro b-typography b-typography__paragraph" itemprop="description">{{ $post->announce }}</div>
                        <p class="b_post__actions">
                            <a class="b-post__more b-button" href="{{ route('post.show', ['id' => $post->translate_title], false) }}">Дальше</a>
                        </p><!--/.b_post__actions-->
                    </div><!--/.b-post__content-->
                    <div itemprop="publisher" itemscope="" itemtype="https://schema.org/Organization">
                        <link itemprop="url" href="{{ PageHelper::getProtocol().$_SERVER['SERVER_NAME'].'/' }}">
                        <div itemprop="logo" itemscope="" itemtype="https://schema.org/ImageObject">
                            <a itemprop="image" href="/storage/images/valknut.jpg"></a>
                            <a itemprop="url" href="/storage/images/valknut.jpg"></a>
                            <meta itemprop="width" content="100">
                            <meta itemprop="height" content="100">
                        </div>
                        <meta itemprop="address" content="{{ PageHelper::getProtocol().$_SERVER['SERVER_NAME'].'/' }}">
                        <meta itemprop="telephone" content="">
                        <meta itemprop="name" content="Author">
                    </div>
                </div><!--/.b-post-->
                @endforeach
            @endif
            {{ $posts->links() }}
        </div>
    </div><!--/.b-grid__col-->
@endsection