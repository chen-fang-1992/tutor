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
Route::post('/user/register', 'UserController@register');

Route::post('/user/login', 'UserController@login');
Route::get('/user/logout', 'UserController@logout');

Route::get('/user/profile/show', 'UserController@show');
Route::post('/user/profile/update', 'UserController@update');

Route::get('/tutor/show', 'TutorController@show');

Route::get('/{path?}', function() {
	return view('view', ['auth' => 'false', 'tutors' => '']);
})->where('path', '.*');
