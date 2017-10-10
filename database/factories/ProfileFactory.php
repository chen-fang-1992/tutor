<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Profile::class, function (Faker $faker) {
	$firstname = str_random(5);
	$lastname = str_random(5);
	$fullname = $firstname . ' ' . $lastname;
	$language = array ('English','Chinese','French', 'Germany');

	return [
		'firstName' => $firstname,
		'lastName' => $lastname,
		'user_id' => factory(App\User::class)
			->create([ 'name' => $fullname ])->id,
		'number' => $faker->e164PhoneNumber,
		'country' => $faker->country,
		'language' => $faker->randomElement($language),
		'city' => 'Sydney',
		'location' => $faker->address,
		'availability' => random_int(1, 15),
		'currency' => 'AUS',
		'price' => random_int(40, 100),
		'about' => $faker->text(200),
		'picture' => '/img/8dVRQ_YXOJU.jpeg'
	];
});
