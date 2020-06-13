<?php

namespace App;

use App\Traits\SitemapTrait;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use SitemapTrait;

    const CACHE_KEY = 'categories';

    protected $fillable = ['name', 'translate_name'];

    public function posts()
    {
        return $this->hasMany('App\Post');
    }
}
