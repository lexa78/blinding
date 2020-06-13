@extends('admin')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading">Редактирование папки</div>
                    <div class="panel-body">
                        <form method="post" action="{{ route('pictures.update', ['picture' => $folder], false) }}">
                            @include('admin.picture._form')
                            <input type="hidden" name="_method" value="PATCH">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection