<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMembersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('members', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 50);
            $table->string('email', 50)->unique();
            $table->boolean('signed')->default(0)->comment('По подписке');
            $table->boolean('pidor')->default(0)->comment('За ним какой-то косяк');
            $table->string('pidor_reason', 200)->nullable()->comment('Какой косяк за пидором');
            $table->ipAddress('ip')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('members');
    }
}
