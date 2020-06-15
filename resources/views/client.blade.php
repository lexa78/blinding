<!DOCTYPE html>
<html lang="ru" class="b-font_size_base">
<head>
    <meta charset="UTF-8" >
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="{{Storage::url('images/valknut.jpg')}}">
    <title>@yield('title')</title>
    <link rel="manifest" href="/manifest.json" />
    <script>
      setTimeout(function() {
        var oneSignalScript = document.createElement('script');
        oneSignalScript.src = "https://cdn.onesignal.com/sdks/OneSignalSDK.js";
        oneSignalScript.async = false;
        oneSignalScript.onload = function() {
          var OneSignal = window.OneSignal || [];
          OneSignal.push(function () {
            OneSignal.init({
              appId: "e6a0aaf7-9ab0-40dc-8341-028a9e53b8ba"
            });
          });
        };
        document.body.append(oneSignalScript);
      }, 1000 * 60);
    </script>

    <meta name="description" content="@yield('description')">
    <link href="https://blinding.ru/" rel="canonical">
    <link href="{{ asset('/css/blog.css') }}" rel="stylesheet">
    <link href="{{ asset('/css/customBlog.css') }}" rel="stylesheet">
    @yield('css')
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-153849820-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-153849820-1');
    </script>	<meta name="yandex-verification" content="5671bf602febccc2" />
</head>
<body class="b-page b-font b-font_color_base b-font_size_regular b-font_family_regular home blog wp-custom-logo">

<header class="b-header b-page__header">
    <div class="b-grid">
        <div class="b-grid__row b-grid__row_align-vertical_center">

            <div class="b-grid__col b-grid__col_size_12 b-grid__col_size_sm-10 b-grid__col_size_lg-5">
                <a class="b-logo" href="/" rel="home">
                    <p class="b-logo__image-wrapper">
                        <img class="b-logo__image" src="{{Storage::url('images/valknut.jpg')}}" alt="Оставленные записки" />
                    </p>
                    <div class="b-logo__content-wrapper">
                        <h1 class="b-logo__title b-font b-font_family_caption">Оставленные записки</h1>
                        <p class="b-logo__description">Понемногу обо всем</p>
                    </div><!--/.b-logo__content-wrapper-->
                </a><!--/.b-logo-->
            </div><!--/.b-grid__col-->

            <div class="b-grid__col b-grid__col_size_12 b-grid__col_size_sm-2 b-grid__col_size_lg-7">
                <nav class="b-navigation b-navigation__content" aria-label="Главное меню">
                    <button class="b-navigation__toggle">
                        <i class="b-navigation__toggle-icon-open b-icon b-icon_type_bars"></i>
                        <i class="b-navigation__toggle-icon-close b-icon b-icon_type_times"></i>
                    </button>

                    <div class="">
                        <ul class="b-navigation__list">
                            <li class="b-navigation__item">
                                <a class="b-navigation__link" href="/">Главная</a>            </li>
                            <li class="b-navigation__item">
                                <a class="b-navigation__link" href="/contacts">Контакты</a>            </li>
                            <li class="b-navigation__item">
                                <a class="b-navigation__link" href="/sitemap">Карта сайта</a>            </li>
                        </ul>
                    </div>
                </nav><!-- .main-navigation -->
            </div><!--/.b-grid__col-->

        </div><!--/.b-grid__row-->
    </div><!--/.b-grid-->
</header><!--/.b-header-->


<div class="b-page__body">

    <div class="b-grid">
        <div class="b-grid__row">
            @yield('content')
            <div class="b-page__body-sidebar b-sticky__container b-grid__col b-grid__col_size_12 b-grid__col_size_lg-4">
                <div style="margin-bottom: 3rem;">

                    <aside id="search-2" class="widget-odd widget-first widget-1 b-widget widget_search">
                        <form class="b-search-form" role="search" method="get" action="/search">
                            <input class="b-search-form__input" required="required" type="search" id="search-form-5a81b431b9a62" placeholder="Поиск…" value="@yield('searchQuery')" name="s">
                            <button class="b-search-form__submit" type="submit" title="Найти"><i class="b-icon b-icon_type_search"></i></button>
                        </form><!--/.b-search-form-->
                    </aside><aside class="b-widget b-follow b-widget_free ">
                        <p class="b-follow__title b-font b-font_family_caption">Подписка на статьи</p>
                        <form class="b-follow__form" action="/subscribe" method="POST" target="_blank">
                            <input name="pname" class="b-follow__form-input" required="required" type="text" placeholder="Ваше имя / ник ...">
                            <p class="b-follow__form-row">
                                <input name="pemail" class="b-follow__form-input" required="required" type="email" placeholder="Ваш E-mail...">
                                <button class="b-follow__form-submit"><i class="b-icon b-icon_type_paper-plane"></i></button>
                            </p><!--/.b-follow__form-row-->
                            <label class="b-follow__form-privacy">
                                <input name="pagree" class="b-follow__form-privacy-check b-form__checkbox" type="checkbox" checked="checked" required="required">
                                <small class="b-follow__form-privacy-label">Даю согласие на <a class="b-follow__form-privacy-link b-typography__link" target="_blank" href="/privacy">обработку персональных данных</a></small>
                            </label><!--/.b-subscribe__form-privacy-->
                        </form><!--/.b-follow__form-->
                    </aside>
{{--                    <aside class="b-widget b-socials b-widget_free ">--}}
{{--                        <div class="textwidget custom-html-widget">--}}
{{--                            <p class="b-socials-title b-font b-font_family_caption">Социальные сети</p>--}}
{{--                            <p class="b-socials-description b-typography b-typography__paragraph">--}}
{{--                                Делюсь интересной информацией не только на блоге, но и в социальных сетях!--}}
{{--                            </p>--}}
{{--                            <p class="b-socials-list">--}}
{{--                                <a class="b-socials-item b-socials-item_email" target="_blank" href="mailto:stansmith81028@gmail.com">--}}
{{--                                    <i class="b-icon b-icon_type_email"></i>--}}
{{--                                    <span class="screen-reader-text">Email</span>--}}
{{--                                </a>--}}
{{--                                <a class="b-socials-item b-socials-item_skype" target="_blank" href="skype:live:.cid.6b5cc1e342e15321">--}}
{{--                                    <i class="b-icon b-icon_type_skype"></i>--}}
{{--                                    <span class="screen-reader-text">Skype</span>--}}
{{--                                </a>--}}
{{--                            </p><!--/.b-socials-list-->--}}
{{--                        </div>--}}
{{--                    </aside>--}}
                    <aside id="categories-2" class="widget-even widget-4 b-widget blogbase_widget_categories">
                        <p class="b-widget__title">Рубрики</p>
                        <ul class="b-category-list">
                            <?php use App\Http\Helpers\PageHelper; $categories = PageHelper::getCategoryInfo(); ?>
                            @foreach($categories as $category)
                                <li class="b-category-list__item b-category-list__item_id-1">
                                    <a class="b-category-list__link b-typography__link" href="{{ URL::route('category.posts', ['id' => $category->id], false) }}">{{ $category->name }} ({{ $category->postsCount }})</a>
                                </li>
                            @endforeach
                        </ul>
                    </aside>
                    <aside class="b-widget ">
                        <p class="b-widget__title">Свежие записи</p>
                        <ul class="b-recent-posts">
                            <?php $recentPosts = PageHelper::getRecentPostsInfo(); ?>
                            @foreach($recentPosts as $post)
                                <li class="b-recent-posts__item b-small-post">
                                    <a class="b-recent-posts__link" href="{{ route('post.show', ['id' => $post->url], false) }}">
                                        <img class="b-small-post__image" data-lazy-src="{{ $post->img }}" />
                                        <span class="b-recent-posts__date">{{ $post->daysAgo }}</span>
                                        <span class="b-small-post__title b-typography__link">{{ $post->title }}</span>
                                    </a><!--/.b-recent-posts__link-->
                                </li><!--/.b-recent-posts__item-->
                            @endforeach
                        </ul><!--/.b-recent-posts-->
                    </aside><!--/.b-widget-->

                </div>



                <div class="b-sticky b-sticky_edge_top b-sticky_wrapper_false">
                </div>




            </div><!--/.b-grid__col-->
        </div><!--/.b-grid__row-->
    </div><!--/.b-grid-->

</div><!--/.b-page__body-->

<aside class="b-widget b-footer-callout ">
    <div class="b-grid">
        <div class="b-footer-callout__content">
            <p class="b-footer-callout__title b-font b-font_family_caption">Подпишитесь на Новые Статьи, чтобы Ничего Не Пропустить</p>
            <p class="b-footer-callout__actions">
                <a id="popup-footer-callout-trigger" class="b-footer-callout__button b-button b-button_dark b-popup b-timer b-timer_action_once" href="#popup-footer-callout" data-timer-action="$('#popup-footer-callout-trigger').click();" data-timer="18" >Подписаться</a>
            </p><!--/.b-footer-callout__actions-->
        </div><!--/.b-footer-callout__content-->
    </div><!--/.b-grid-->
</aside>

<aside class="b-subscribe b-popup__window" id="popup-footer-callout">
    <p class="b-subscribe__title b-popup__window__title">Хотите больше интересной информации?</p>
    <div class="b-subscribe__content b-popup__window-content">
        <div class="b-subscribe__text b-typography">
            <ul>
                <li>Мечты сбываются! Делюсь своими знаниями!</li>
                <li>Подписывайтесь на информацию</li>
            </ul>        </div><!--/.b-subscribe__text.b-typography-->
        <form class="b-subscribe__form b-form" action="/subscribe" method="POST" target="_blank">
            <div class="b-subscribe__form-row b-form__row">
                <input name="fname" class="b-subscribe__form-input b-form__input" type="text" required="required" placeholder="Ваше имя / ник...">
                <input name="femail" class="b-subscribe__form-input b-form__input" type="email" required="required" placeholder="Ваш E-mail...">
                <button class="b-subscribe__form-submit b-form__submit b-button b-button_dark">Подписаться</button>
            </div><!--/.b-subscribe__form-row.b-form__row-->
            <label class="b-subscribe__form-privacy">
                <input name="fagree" class="b-subscribe__form-privacy-check b-form__checkbox" type="checkbox" checked="checked" required="required">
                <small class="b-subscribe__form-privacy-label">Даю согласие на <a class="b-subscribe__form-privacy-link b-typography__link b-typography__link_dark" target="_blank" href="/privacy">обработку персональных данных</a></small>
            </label><!--/.b-subscribe__form-privacy-->
        </form><!--/.b-form-->
        <footer class="b-subscribe__footer">
            <p class="b-subscribe__farewall">
                <img alt="Автор" class="b-subscribe__avatar" src="{{Storage::url('images/valknut.jpg')}}" />

                <span class="b-subscribe__slogan">Только самое интересное!</span>
            </p><!--/.b-subscribe__farewall-->
            <p class="b-subscribe__signature">
                <span class="b-typography_nowrap">С уважением,</span><br />
                <span class="b-typography_nowrap">автор этого блога</span><br />
            </p><!--/.b-subscribe__signature-->
        </footer><!--/.b-subscribe__footer-->
    </div><!--/.b-popup__window-content-->
</aside><!--/.b-popup__window-->

<footer class="b-footer b-page__footer">
    <div class="b-footer__bottom">
        <div class="b-grid">
            <div class="b-grid__row b-grid__row_align-vertical_center">
                <div class="b-grid__col b-grid__col_size_12 b-grid__col_size_lg-6 b-navigation b-navigation_footer b-footer__menu">

                    <div class="">
                        <ul class="b-navigation__list">
                            <li class="b-navigation__item">
                                <a class="b-navigation__link" href="/privacy">Политика конфиденциальности</a>            </li>
                        </ul>
                    </div>
                </div>
                <div class="b-grid__col b-grid__col_order_lg-first b-grid__col_size_12 b-grid__col_size_lg-6 b-footer__copyright">
                    &copy; 2020 Оставленные записки, Все права защищены.
                </div>
            </div><!--/.b-grid__row-->
        </div><!--/.b-grid-->
    </div><!--/.b-footer__copyright-->
</footer><!--/.b-footer-->

<a class="b-totop" title="Наверх"><i class="b-icon b-icon_type_arrow-up"></i></a>

<div class="b-popup__window" id="flash">
    <p class="b-popup__window-title">Сообщение</p>
    <div class="b-popup__window-content b-typography">
    </div><!-- b-typography -->
</div><!--/.b-popup__windows-->
<a id="flash-show" href="#flash" class="b-popup"></a>

<div style="display: none">
    <!-- Yandex.Metrika counter --> <script type="text/javascript" > (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(56527639, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); </script> <noscript><div><img src="https://mc.yandex.ru/watch/56527639" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter --></div>

<div class="b-accept-cookie b-accept-cookie_hide">
    <div class="b-grid">
        <div class="b-accept-cookie__wrap">
            <p class="b-accept-cookie__text">
                Мы cохраняем файлы cookie: это помогает сайту работать лучше. Подробности в
                <a class="b-accept-cookie__link b-typography__link" href="/privacy" target="_blank">политике конфиденциальности</a>.
            </p>
            <button class="b-accept-cookie__button b-button">Хорошо</button>
        </div>
    </div>
</div>
<div id="loader-identity-container">
    <div id="loader-identity">&there4;</div>
</div>
@csrf
<script src="{{ asset('/js/scripts.js') }}" async="async"></script>
</body>
</html>
