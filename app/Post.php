<?php

namespace App;

use App\Search\Searchable;
use App\Traits\SitemapTrait;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;


class Post extends Model
{
    use SitemapTrait, Searchable;

    const CACHE_KEY = 'recentPosts';

    protected $fillable = ['meta_title', 'meta_description', 'title', 'announce', 'image_path', 'views',
        'category_id', 'translate_title', 'published', 'post_text', 'img_title', 'img_alt'];

    public function category()
    {
        return $this->belongsTo('App\Category');
    }

    public function comments()
    {
        return $this->hasMany('App\Comment');
    }

    /**
     * @param Builder $query
     */
    public function scopePublish(Builder $query)
    {
        $query->where('published', 1);
    }
}
