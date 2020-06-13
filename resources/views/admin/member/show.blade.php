@extends('admin')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading">Пользователи {{ $member }}</div>
                    <div class="panel-body">
                        <table width="100%" id="user-table">
                            <thead>
                                <tr>
                                    <th>Имя или ник</th>
                                    <th>Email</th>
                                    <th>Ip</th>
                                    <th>Подписан ли</th>
                                    <th>Неужели пидор</th>
                                    <th>Причина пидорасничества</th>
                                    <th>Последняя дата</th>
                                </tr>
                            </thead>
                            <tbody>
                            @foreach($members as $item)
                                <tr>
                                    <td>{{ $item->name }}</td>
                                    <td>{{ $item->email }}</td>
                                    <td>{{ $item->ip }}</td>
                                    <td>@if($item->signed) да @else нет @endif</td>
                                    <td>@if($item->pidor) да @else нет @endif</td>
                                    <td>{{ $item->pidor_reason }}</td>
                                    <td>{{ date('d.m.Y H:i:s', strtotime($item->updated_at)) }}</td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                    {{ $members->links('vendor.pagination.admin-paginate') }}
                    <a href="{{ URL::route('admin', [], false) }}" class="btn btn-info">Вернуться</a>
                </div>
            </div>
        </div>
    </div>
@endsection