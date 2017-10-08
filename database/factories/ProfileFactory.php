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
    return [
        'user_id' =>  function () {
             return factory(App\User::class)->create()->id;
        },
		'firstName' => str_random(10),
		'lastName' => str_random(10),
		'number' => str_random(10),
		'country' => str_random(10),
		'language' => 'Germany',
		'city' => str_random(10),
		'location' => str_random(10),
		'availability' => 1111,
		'currency' => str_random(10),
		'price' => 100,
		'about' => str_random(10)
    ];
});
