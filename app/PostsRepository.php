<?php
namespace App;


interface PostsRepository
{
    public function search(string $query = '') : array;
}