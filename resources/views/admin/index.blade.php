<?php
use \App\Http\Controllers\AdminController;
?>
@extends('admin')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading">Комментарии</div>
                    <div class="panel-body">
                        <p>@if($commentsCount)
                                <b>
                                    {{ $commentsCount }} новых комментариев
                                    <a href="{{ URL::route('showNewComments', [], false) }}" class="btn btn-info">Показать</a>
                                </b>
                            @else
                                Нет новых комментариев
                            @endif
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading">Пользователи</div>
                    <div class="panel-body">
                        <table width="100%">
                            <tr>
                                <td>
                                    <h3>Всего пользователей</h3>
                                    @if($totalMembersCount)
                                        <h4><a href="{{ URL::route('showMembers', ['type' => AdminController::ALL_MEMBERS_TYPE], false) }}">{{ $totalMembersCount }}</a></h4>
                                    @else
                                        <p>Нет никаких пользователей</p>
                                    @endif
                                    <hr>
                                </td>
                                <td>
                                    <h3>По подписке</h3>
                                    @if($signedMembersCount)
                                        <h4><a href="{{ URL::route('showMembers', ['type' => AdminController::SIGNED_MEMBER_TYPE], false) }}">{{ $signedMembersCount }}</a></h4>
                                    @else
                                        <p>Нет подписавшихся пользователей</p>
                                    @endif
                                    <hr>
                                </td>
                                <td>
                                    <h3>Пидорасов</h3>
                                    @if($pidorsCount)
                                        <h4><a href="{{ URL::route('showMembers', ['type' => AdminController::PIDOR_MEMBER_TYPE], false) }}">{{ $pidorsCount }}</a></h4>
                                    @else
                                        <p>Пидорасов нет</p>
                                    @endif
                                    <hr>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading">Поисковые запросы</div>
                    <div class="panel-body">
                        <table width="100%">
                            <tr>
                                <td>
                                    <h3>Всего запросов</h3>
                                    @if($totalSearchQueriesCount)
                                        <h4>{{ $totalSearchQueriesCount }}</h4>
                                    @else
                                        <p>Нет никаких запросов</p>
                                    @endif
                                    <hr>
                                </td>
                                <td>
                                    <h3>Из них новых запросов</h3>
                                    @if($newSearchQueriesCount)
                                        <h4>{{ $newSearchQueriesCount }}</h4>
                                    @else
                                        <p>Нет новых запросов</p>
                                    @endif
                                    <hr>
                                </td>
                            </tr>
                        </table>
                        <a href="{{ URL::route('showQueries', [], false) }}" class="btn btn-info">Посмотреть</a>
                    </div>
                </div>
            </div>
{{--            <div class="col-md-10 col-md-offset-1">--}}
{{--                <div class="panel panel-default">--}}
{{--                    <div class="panel-heading">Пункты назначения</div>--}}

{{--                </div>--}}
{{--            </div>--}}
{{--            <div class="col-md-10 col-md-offset-1">--}}
{{--                <div class="panel panel-default">--}}
{{--                    <div class="panel-heading">Товары</div>--}}

{{--                </div>--}}
{{--            </div>--}}
{{--            <div class="col-md-10 col-md-offset-1">--}}
{{--                <div class="panel panel-default">--}}
{{--                    <div class="panel-heading">Статусы заказов запчастей</div>--}}

{{--                </div>--}}
{{--            </div>--}}
{{--            <div class="col-md-10 col-md-offset-1">--}}
{{--                <div class="panel panel-default">--}}
{{--                    <div class="panel-heading">Услуги</div>--}}

{{--                </div>--}}
{{--            </div>--}}
{{--            <div class="col-md-10 col-md-offset-1">--}}
{{--                <div class="panel panel-default">--}}
{{--                    <div class="panel-heading">Статусы заказов услуг</div>--}}

{{--                </div>--}}
{{--            </div>--}}

        </div>
    </div>
@endsection