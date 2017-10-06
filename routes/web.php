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

Route::get('/', 'HomeController@index');
Route::get('/home', 'HomeController@index');

Route::group(['prefix' => 'user'], function() {
	Route::get('login', 'UserController@login');
	Route::post('login', 'Auth\LoginController@login');
	Route::get('logout', 'Auth\LoginController@logout');

	Route::get('register', 'UserController@register');
	Route::post('register', 'Auth\RegisterController@register');

	Route::get('profile/create', 'UserController@store');
	Route::get('profile', 'UserController@show');
	Route::post('profile', 'UserController@update');
	Route::get('profile/detail', 'UserController@detail');
});