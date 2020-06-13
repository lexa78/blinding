
    @csrf
    <div class="form-group">
        <label for="folder_name">Название папки:</label>
        <input type="text" class="form-control" name="folder_name" id="folder_name" value="@if(!empty($folder)) {{$folder}} @endif"/>
    </div>
    <button type="submit" class="btn btn-primary-outline">Добавить папку</button>

