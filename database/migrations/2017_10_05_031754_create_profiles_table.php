<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfilesTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('profiles', function (Blueprint $table) {
			$table->increments('id');
			$table->integer('user_id')->unsigned();
			$table->string('firstname');
			$table->string('lastname');
			$table->string('number')->nullable();
			$table->string('country')->nullable();
			$table->string('language')->nullable();
			$table->string('city')->nullable();
			$table->string('location')->nullable();
			$table->integer('availability')->unsigned()->nullable();
			$table->string('currency')->nullable();
			$table->integer('price')->unsigned()->nullable();
			$table->string('rate')->nullable();
			$table->text('about')->nullable();
			$table->text('picture')->nullable();
			$table->timestamps();

			$table->foreign('user_id')
				->references('id')
				->on('users')
				->onUpdate('cascade')
				->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
        Schema::table('profiles', function(Blueprint $tabel){
            $tabel->dropForeign('profiles_user_id_foreign');
        });
		Schema::dropIfExists('profiles');
	}
}
