<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class StaticController extends Controller
{
    public function privacy()
    {
        return view('client.privacy');
    }

    public function contacts()
    {
        return view('client.contacts');
    }

    public function sitemap()
    {
        $pages = Category::with('posts')->get();
        return view('client.sitemap', compact('pages'));
    }
}
