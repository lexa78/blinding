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
                @if(session()->get('error'))
                    <div class="alert alert-danger">
                        {{ session()->get('error') }}
                    </div>
                @endif
            </div>
        </div>
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading">Категории</div>

                    <div class="panel-body">
                        @if(!empty($categories->count()))
                            <table class="table">
                                <tr>
                                    <th scope="col">Название категории</th>
                                    <th scope="col">Редактировать</th>
                                    <th scope="col">Удалить</th>
                                </tr>
                                @foreach($categories as $category)
                                    <tr>
                                        <td>{{$category->name}}</td>
                                        <td><a href="{{route('categories.edit', ['category' => $category->id], false)}}"
                                            class="btn btn-primary btn-sm align-self-center">Редактировать</a></td>
                                        <td>@include('admin.category._destroyForm')</td>
                                    </tr>
                                @endforeach
                            </table>
                        @else
                            <p>Нет созданных карегорий</p>
                        @endif
                            <a href="{{ route('categories.create', [], false) }}" class="btn btn-success btn-sm align-self-center">
                                Добавить категорию
                            </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection