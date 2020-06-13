<?php

namespace App;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class SearchQuery extends Model
{
    protected $fillable = ['query', 'ip', 'is_new'];

    /**
     * @param Builder $query
     */
    public function scopeNew(Builder $query)
    {
        $query->where('is_new', 1);
    }
}
