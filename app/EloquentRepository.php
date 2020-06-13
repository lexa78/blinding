<?php
namespace App;

use Illuminate\Database\Eloquent\Collection;

class EloquentRepository implements PostsRepository
{
    public function search(string $query = ''): Collection
    {
        return Post::query()
            ->where('post_text', 'like', "%{$query}%")
            ->orWhere('title', 'like', "%{$query}%")
            ->get();
    }
}