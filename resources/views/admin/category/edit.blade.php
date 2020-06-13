@extends('admin')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading">Редактирование категории</div>
                    <div class="panel-body">
                        <form method="post" action="{{ route('categories.update', ['category' => $category->id], false) }}">
                            @include('admin.category._form')
                            <input type="hidden" name="_method" value="PATCH">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection