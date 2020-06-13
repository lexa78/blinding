<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('comment_text');
            $table->smallInteger('level')->unsigned()->default(0);
            $table->bigInteger('parent_id')->unsigned()->nullable();
            $table->bigInteger('post_id')->unsigned();
            $table->bigInteger('member_id')->unsigned();
            $table->boolean('is_new')->default(1);
            $table->boolean('accepted')->default(0);
            $table->timestamps();

            $table->foreign('post_id')->references('id')->on('posts');
            $table->foreign('member_id')->references('id')->on('members');
            $table->foreign('parent_id')->references('id')->on('comments');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments');
    }
}
