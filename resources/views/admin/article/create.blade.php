@extends('admin')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading">Добавление статьи</div>
                    <div class="panel-body">
                        <form method="post" action="{{ route('articles.store', [], false) }}">
                         @include('admin.article._form')
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="modal-black" style="display: none; background-color: black; opacity: 0.5; width: 100%; height: 100%; position: absolute; top: 0; left: 0;"></div>
    <div id="modal" style="display: none; background-color: white; width: 70%; height: 70%; position: absolute; top: 15%; left: 15%;">
        <div class="img-content"></div>
        <div ></div>
        <input style="position: absolute; top: 90%; left: 45%" class="btn btn-success" type="button" value="Закрыть окно" id="closeWindow">
    </div>
{{--            <img src="{{Storage::url('images/pro-igru/prodaja-jaic.jpg')}}">--}}
@endsection

@section('jsScripts')
    <script>
      $('#choose_folder').change(function () {
        $.get(
          '{{ route('getImagesFromFolder', [], false) }}',
          {
            folder: $(this).val()
          },
          onAjaxSuccess
        );
      });
      function onAjaxSuccess(data)
      {
        data = JSON.parse(data);
        let html = '';
        for (let i=0; i<data.length; i++) {
          let title = data[i].split('/');
          title = title[title.length-1];
          html += '<img src="'+data[i]+'" width="200" height="200" class="choose-img" title="'+title+'" style="margin-right: 50px; margin-bottom: 50px;">';
        }
        $('#modal .img-content').html(html);
        //alert(data);
        $('#modal-black, #modal').css('display', 'block');
      }

      $('#closeWindow').click(function () {
        $('#modal-black, #modal').css('display', 'none');
      });

      $('div.img-content').on('click', '.choose-img', function () {
        $('#folder-with-img-val').val($(this).attr('src'));
        $('#modal-black, #modal').css('display', 'none');
      });
    </script>
@endsection