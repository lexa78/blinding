<?php

namespace App;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['comment_text', 'level', 'parent_id', 'post_id', 'member_id', 'is_new', 'accepted'];

    public function post()
    {
        return $this->belongsTo('App\Post');
    }

    public function member()
    {
        return $this->belongsTo('App\Member');
    }

    public function childComments()
    {
        return $this->hasMany('App\Comment', 'parent_id', 'id');
    }

    /**
     * @param Builder $query
     */
    public function scopeAccepted(Builder $query)
    {
        $query->where('accepted', 1);
    }

    /**
     * @param Builder $query
     */
    public function scopeNew(Builder $query)
    {
        $query->where('is_new', 1);
    }
}
