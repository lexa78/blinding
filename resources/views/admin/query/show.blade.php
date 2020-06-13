@extends('admin')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading">Поисковые запросы</div>
                    <div class="panel-body">
                        <table width="100%" id="user-table">
                            <thead>
                                <tr>
                                    <th>Запрос</th>
                                    <th>Ip</th>
                                    <th>Дата запроса</th>
                                    <th>Действия</th>
                                </tr>
                            </thead>
                            <tbody>
                            @foreach($queries as $query)
                                <tr id="tr{{ $query->id }}">
                                    <td @if($query->is_new) class="new-search-query" @endif>{{ $query->query }}</td>
                                    <td @if($query->is_new) class="new-search-query" @endif>{{ $query->ip }}</td>
                                    <td @if($query->is_new) class="new-search-query" @endif>{{ date('d.m.Y H:i:s', strtotime($query->created_at)) }}</td>
                                    <td>@if($query->is_new)
                                            <a href="#" id="{{ $query->id }}" class="btn btn-info makeOld">Сделать неновым</a>
                                        @endif
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                        @csrf
                    </div>
                    {{ $queries->links('vendor.pagination.admin-paginate') }}
                    <a href="{{ URL::route('admin', [], false) }}" class="btn btn-info">Вернуться</a>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('jsScripts')
    <script>
      $('.makeOld').on('click', function (e) {
        e.preventDefault();
        let clickedElement = $(this);
        let id = clickedElement.attr('id');
        $.ajax({
          type: "POST",
          cache: false,
          url: '{{ route('makeQueryOld', [], false) }}',
          data: {
            _token: $('[name = "_token"]').val(),
            id: id
          }, // all form fields
          success: function (data) {
            if (data === 'ok')  {
              $('#tr'+id+' td.new-search-query').removeClass('new-search-query');
              clickedElement.hide();
            } else {
              alert('Что-то пошло не так.')
            }
          }, // success
        }); // ajax
      });
    </script>
@endsection