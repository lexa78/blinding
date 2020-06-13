@if ($paginator->hasPages())
    <ul class="b-pager b-pager_comments">
        {{-- Previous Page Link --}}
        @if ($paginator->onFirstPage())
            <li class="b-pager__item b-pager__item_first b-pager__item_disabled">
                <span class="b-pager__link">
                    <i class="b-icon b-icon_type_first-page"></i>
                </span>
            </li>
            <li class="b-pager__item b-pager__item_prev b-pager__item_disabled">
                <span class="b-pager__link">
                    <i class="b-icon b-icon_type_chevron-left"></i>
                </span>
            </li>
        @else
            <li class="b-pager__item b-pager__item_prev">
                <a class="b-pager__link" href="{{ $paginator->previousPageUrl() }}">
                    <i class="b-icon b-icon_type_chevron-left"></i>
                </a>
            </li>
        @endif

        {{-- Pagination Elements --}}
        @foreach ($elements as $element)
            {{-- "Three Dots" Separator --}}
            @if (is_string($element))
                <li class="b-pager__item">
                    <span class="b-pager__link">{{ $element }}</span>
                </li>
            @endif

            {{-- Array Of Links --}}
            @if (is_array($element))
                @foreach ($element as $page => $url)
                    @if ($page == $paginator->currentPage())
                        <li class="b-pager__item b-pager__item_active b-pager__item_disabled">
                            <span class="b-pager__link">{{ $page }}</span>
                        </li>
                    @else
                        <li class="b-pager__item">
                            <a class="b-pager__link" href="{{ $url }}" data-page="{{ $page - 1 }}">{{ $page }}</a>
                        </li>
                    @endif
                @endforeach
            @endif
        @endforeach

        {{-- Next Page Link --}}
        @if ($paginator->hasMorePages())
            <li class="b-pager__item b-pager__item_next">
                <a class="b-pager__link" href="{{ $paginator->nextPageUrl() }}">
                    <i class="b-icon b-icon_type_chevron-right"></i>
                </a>
            </li>
        @else
            <li class="b-pager__item b-pager__item_next b-pager__item_disabled">
                <span class="b-pager__link">
                    <i class="b-icon b-icon_type_chevron-right"></i>
                </span>
            </li>
        @endif
    </ul>
@endif
