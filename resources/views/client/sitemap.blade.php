@extends('client')

@section('title') Карта сайта @endsection
@section('description') На этой странице можно быстро найти нужную вам информацию @endsection
@section('content')
<div class="b-page__body-content b-grid__col b-grid__col_size_12 b-grid__col_size_lg-8">
    <div itemscope="" itemtype="https://schema.org/Article">
        <div itemscope="" itemprop="mainEntityOfPage" itemtype="https://schema.org/WebPage" itemid="https://blinding.ru/sitemap"></div>
        <div class="b-post b-post_full">
            <h1 class="b-post__title b-font b-font_family_caption" itemprop="headline">Карта сайта</h1>
            <div class="b-post__meta">
                <meta itemprop="dateModified" content="2020-05-09T17:28:02+03:00">

                <time style="display: none;" class="b-post__meta-item b-post__meta-date" itemprop="datePublished" datetime="2020-05-09T17:28:02+03:00"></time>

                <span class="b-post__meta-item b-post__meta-author" itemprop="author" style="display: none;"></span>
            </div><!--/.b-post__meta-->

            <div itemprop="publisher" itemscope="" itemtype="https://schema.org/Organization">
                <link itemprop="url" href="https://blinding.ru/">
                <div itemprop="logo" itemscope="" itemtype="https://schema.org/ImageObject">
                    <a itemprop="image" href="/storage/images/valknut.jpg"></a>
                    <a itemprop="url" href="/storage/images/valknut.jpg"></a>
                    <meta itemprop="width" content="100">
                    <meta itemprop="height" content="100">
                </div>
                <meta itemprop="address" content="https://blinding.ru/">
                <meta itemprop="telephone" content="">
                <meta itemprop="name" content="">
            </div>

            <div class="b-post__content b-nocopy">
                <div class="b-typography b-font b-font_size_content" itemprop="articleBody">

                    <div class="">
                        <h2>Страницы</h2>
                        <ul>
                            <li>
                                <a href="/contacts">Контакты</a>            </li>
                            <li>
                                <a href="/sitemap">Карта сайта</a>            </li>
                            <li>
                                <a href="/privacy">Политика конфиденциальности</a>            </li>
                        </ul>
                        <h2>Статьи по разделам</h2>
                        @if(!empty($pages))
                            <ul>
                                @foreach($pages as $item)
                                    <li>
                                        <strong>
                                            <a href="/category/{{ $item->translate_name }}">{{ $item->name }}</a>
                                        </strong>
                                        @if(count($item->posts))
                                            <ul>
                                                @foreach($item->posts as $post)
                                                    <li>
                                                        <a href="/post/{{$post->translate_title}}">{{ $post->title }}</a>
                                                    </li>
                                                @endforeach
                                            </ul>
                                        @endif
                                    </li>
                                @endforeach
                            </ul>
                        @endif
                    </div>
                </div><!--/.b-typography-->
            </div><!--/.b-post__content-->
        </div><!--/.b-post-->

    </div>

</div><!--/.b-grid__col-->
@endsection