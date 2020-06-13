@extends('admin')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading">Редактирование статьи</div>
                    <div class="panel-body">
                        <form method="post" action="{{ route('articles.update', ['article' => $article->id], false) }}">
                            @include('admin.article._form')
                            <input type="hidden" name="_method" value="PATCH">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection