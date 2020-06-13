
    @csrf
    <div class="form-group">
        <label for="category_name">Название категории:</label>
        <input type="text" class="form-control" name="name" id="category_name" value="@if(!empty($category->name)) {{$category->name}} @endif"/>
    </div>
    @if(!empty($category))
    <div class="form-group">
        <label for="category_slug">Translate категории:</label>
        <input type="text" class="form-control" name="translate_name" id="category_slug" value="{{ $category->translate_name }}"/>
    </div>
    @endif
    <button type="submit" class="btn btn-primary-outline">Добавить запись</button>

