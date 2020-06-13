<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//admin
Route::middleware(['auth.basic'])->group(function () {
    Route::get('admin',['as'=>'admin','uses'=>'AdminController@index']);
    Route::resource('admin/categories', 'CategoryController');
    Route::resource('admin/articles', 'ArticleController');
    Route::post('admin/addImage',['as'=>'addImage','uses'=>'PictureController@addImage']);
    Route::resource('admin/pictures', 'PictureController');
    Route::get('admin/getImagesFromFolder',['as'=>'getImagesFromFolder','uses'=>'ArticleController@getImagesFromFolder']);
    Route::get('admin/showNewComments',['as'=>'showNewComments','uses'=>'AdminCommentController@index']);
    Route::post('admin/commentAction',['as'=>'commentAction','uses'=>'AdminCommentController@commentAction']);
    Route::get('admin/showMembers/{type}',['as'=>'showMembers','uses'=>'AdminController@showMembers']);
    Route::get('admin/showQueries',['as'=>'showQueries','uses'=>'AdminController@showSearchQueries']);
    Route::post('admin/makeQueryOld',['as'=>'makeQueryOld','uses'=>'AdminController@makeQueryOld']);
});

//client
Route::get('/', ['as'=>'index','uses'=>'PostController@index']);
Route::get('/post/{id}', ['as'=>'post.show','uses'=>'PostController@show']);
Route::get('/category/{id}', ['as'=>'category.posts','uses'=>'PostController@postsInCategory']);
Route::get('/search', ['as'=>'search','uses'=>'PostController@search']);
Route::get('/privacy', ['as'=>'privacy','uses'=>'StaticController@privacy']);
Route::get('/contacts', ['as'=>'contacts','uses'=>'StaticController@contacts']);
Route::get('/sitemap', ['as'=>'sitemap','uses'=>'StaticController@sitemap']);
Route::post('/more-comments', ['as'=>'more-comments','uses'=>'CommentController@getMoreComments']);
Route::post('/add-comment', ['as'=>'add-comment','uses'=>'CommentController@addComment']);
Route::post('/subscribe', ['as'=>'subscribe','uses'=>'CommentController@blogSubscribe']);
