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
            </div>
            <div class="col-sm-12">
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
                    <div class="panel-heading">Папки и картинки</div>

                    <div class="panel-body">
                        @if(!empty($directories))
                            <table class="table">
                                <tr>
                                    <th scope="col">Название папки</th>
                                    <th scope="col">Редактировать</th>
                                    <th scope="col">Удалить</th>
                                </tr>
                                @foreach($directories as $directory)
                                    <tr>
                                        <td>{{$directory}}</td>
                                        <td><a href="{{route('pictures.edit', ['picture' => $directory], false)}}"
                                            class="btn btn-primary btn-sm align-self-center">Редактировать</a></td>
                                        <td>@include('admin.picture._destroyForm')</td>
                                    </tr>
                                @endforeach
                            </table>
                        @else
                            <p>Нет созданных папок</p>
                        @endif
                            <a href="{{ route('pictures.create', [], false) }}" class="btn btn-success btn-sm align-self-center">
                                Добавить папку
                            </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading">Добавление картинок</div>
                    <div class="panel-body">
                        <form method="post" action="{{ route('addImage', [], false) }}" enctype="multipart/form-data">
                            @csrf
                            <div class="form-group">
                                <label for="folders">Выбор папки для сохранения файлов:</label>
                                <select id="folders" name="folders" class="form-control">
                                    @foreach($directories as $directory)
                                        <option value="{{$directory}}">{{$directory}}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="file_name">Выбор файлов:</label>
                                <input type="file" class="form-control" multiple name="file_name[]" id="file_name"/>
                            </div>
                            <div class="form-group">
                                <label for="published">Сделать ли маленькую картинку:</label>
                                <input type="checkbox" class="form-control" name="small_image" id="published" value="1" />
                            </div>
                            <button type="submit" class="btn btn-primary-outline">Загрузить картинку</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection