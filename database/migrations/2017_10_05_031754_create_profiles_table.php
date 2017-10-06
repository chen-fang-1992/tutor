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
			$table->integer('userId');
			$table->string('firstName');
			$table->string('lastName');
			$table->string('number')->nullable();
			$table->string('country')->nullable();
			$table->string('language')->nullable();
			$table->string('city')->nullable();
			$table->string('location')->nullable();
			$table->integer('availability')->nullable();
			$table->string('currency')->nullable();
			$table->string('price')->nullable();
			$table->string('rate')->nullable();
			$table->text('about')->nullable();
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
		Schema::dropIfExists('profiles');
	}
}
