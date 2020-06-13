@extends('admin')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading">Добавление категории</div>
                    <div class="panel-body">
                        <form method="post" action="{{ route('categories.store', [], false) }}">
                         @include('admin.category._form')
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection