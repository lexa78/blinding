
    @csrf
    <div class="form-group">
        <label for="meta_title">Мета title:</label>
        <input type="text" class="form-control" name="meta_title" id="meta_title" value="@if(!empty($article->meta_title)) {{$article->meta_title}} @endif"/>
    </div>
    <div class="form-group">
        <label for="meta_description">Мета description:</label>
        <input type="text" class="form-control" name="meta_description" id="meta_description" value="@if(!empty($article->meta_description)) {{$article->meta_description}} @endif"/>
    </div>
    <div class="form-group">
        <label for="title">Название статьи:</label>
        <input type="text" class="form-control" name="title" id="title" value="@if(!empty($article->title)) {{$article->title}} @endif"/>
    </div>
    <div class="form-group">
        <label for="announce">Анонс статьи:</label>
        <input type="text" class="form-control" name="announce" id="announce" value="@if(!empty($article->announce)) {{$article->announce}} @endif"/>
    </div>
    <div class="form-group">
        <label for="post_text">Текст статьи:</label>
        <textarea class="form-control" name="post_text" id="post_text" rows="10">
            @if(!empty($article->post_text)) {{ $article->post_text }} @endif
        </textarea>
    </div>
    <div class="form-group">
        <label for="img_title">Title картинки:</label>
        <input type="text" class="form-control" name="img_title" id="img_title" value="@if(!empty($article->img_title)) {{$article->img_title}} @endif"/>
    </div>
    <div class="form-group">
        <label for="img_alt">Alt картинки:</label>
        <input type="text" class="form-control" name="img_alt" id="img_alt" value="@if(!empty($article->img_alt)) {{$article->img_alt}} @endif"/>
    </div>
    @if(!empty($article))
        <div class="form-group">
            <label for="image-path">Путь до главной картинки:</label>
            <input type="text" class="form-control" name="image_path" id="image-path" value="@if(!empty($article->image_path)) {{$article->image_path}} @endif"/>
        </div>
    @else
        <div class="form-group">
            <label for="choose_folder">В какой папке картинка:</label>
            <select id="choose_folder" name="choose_folder" class="form-control">
                <option value="0">Выберите папку</option>
                @foreach($directories as $directory)
                    <option value="{{$directory}}">{{$directory}}</option>
                @endforeach
            </select>
            <input type="hidden" name="folderWithImg" value="" id="folder-with-img-val">
        </div>
    @endif
    <div class="form-group">
        <label for="category_id">К какой категории относится:</label>
        <select id="category_id" name="category_id" class="form-control">
            @foreach($categories as $category)
            <option value="{{$category->id}}" @if(!empty($article->category_id) && $article->category_id == $category->id) selected @endif>{{$category->name}}</option>
            @endforeach
        </select>
    </div>
    @if(!empty($article))
    <div class="form-group">
        <label for="translate_title">Translate названия статьи:</label>
        <input type="text" class="form-control" name="translate_title" id="translate_title" value="{{ $article->translate_title }}"/>
    </div>
    <div class="form-group">
        <label for="views">Количество просмотров:</label>
        <input type="text" class="form-control" name="views" id="views" value="@if(!empty($article->views)) {{$article->views}} @else 0 @endif"/>
    </div>
    @endif
    <div class="form-group">
        <label for="published">Опубликована ли статья:</label>
        <input type="checkbox" class="form-control" name="published" id="published" value="1" @if(!empty($article->published)) checked @endif/>
    </div>

    <button type="submit" class="btn btn-primary-outline">Сохранить статью</button>