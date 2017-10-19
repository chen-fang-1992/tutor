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
Route::group(['prefix' => 'user'], function() {
	Route::post('register', 'UserController@register');

	Route::post('login', 'UserController@login');
	Route::get('logout', 'UserController@logout');

	Route::get('profile/show', 'UserController@show');
	Route::post('profile/update', 'UserController@update');
});

Route::group(['prefix' => 'tutor'], function() {
	Route::get('show', 'TutorController@show');
});

Route::get('/{path?}', function() {
	return view('view', ['auth' => 'false', 'tutors' => '']);
})->where('path', '.*');
