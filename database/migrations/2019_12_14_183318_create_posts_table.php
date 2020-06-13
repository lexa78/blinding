<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('meta_title', 50);
            $table->text('meta_description');
            $table->string('title', 100);
            $table->text('announce');
            $table->string('image_path');
            $table->integer('views')->unsigned()->default(0);
            $table->bigInteger('category_id')->unsigned();
            $table->string('translate_title', 100)->unique();
            $table->boolean('published')->default(0);
            $table->text('post_text');
            $table->string('img_title', 100);
            $table->string('img_alt', 100);
            $table->timestamps();

            $table->foreign('category_id')->references('id')->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
