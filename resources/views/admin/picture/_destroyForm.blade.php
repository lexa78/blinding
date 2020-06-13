<form action="{{ route('pictures.destroy', ['picture' => $directory], false) }}" method="POST">
    @csrf
    <input type="hidden" name="_method" value="DELETE">
    <input type="submit" value="Удалить" class="btn btn-danger btn-sm align-self-center">
</form>