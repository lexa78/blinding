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
                    <div class="panel-heading">Статьи</div>

                    <div class="panel-body">
                        @if(!empty($articles->count()))
                            <table class="table">
                                <tr>
                                    <th scope="col">Название статьи</th>
                                    <th scope="col">Редактировать</th>
                                </tr>
                                @foreach($articles as $article)
                                    <tr>
                                        <td>{{$article->title}}</td>
                                        <td><a href="{{route('articles.edit', ['article' => $article->id], false)}}"
                                            class="btn btn-primary btn-sm align-self-center">Редактировать</a></td>
                                    </tr>
                                @endforeach
                            </table>
                        @else
                            <p>Нет написанных статей</p>
                        @endif
                            <a href="{{ route('articles.create', [], false) }}" class="btn btn-success btn-sm align-self-center">
                                Добавить статью
                            </a>
                    </div>
                    {{ $articles->links('vendor.pagination.admin-paginate') }}
                </div>
            </div>
        </div>
    </div>
@endsection