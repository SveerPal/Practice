<?php

use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\ProductCategoryController;

Auth::routes();
Route::group(['prefix' => 'admin'], function () {

    // Login Routes
    Route::get('login', [LoginController::class, 'showLoginForm'])->name('admin.login');
    Route::post('login', [LoginController::class, 'login'])->name('admin.login.post');
    Route::get('logout', [LoginController::class, 'logout'])->name('admin.logout');

    Route::group(['middleware' => ['auth:admin']], function () {
       
        // Dashboard Route
        Route::get('/', function () {
            return view('admin.dashboard.index');
        })->name('admin.dashboard');

        // Setting Routes
        Route::group(['prefix' => 'settings', 'as' => 'admin.settings'], function () {
            Route::controller(SettingController::class)->group(function () {
                Route::get('/', 'index')->name('');
                Route::post('/', 'update')->name('.update');
            });
        });
        
        // // Admin Profile Routes
        Route::group(['prefix' => 'profile', 'as' => 'admin.profile.'], function () {
            Route::controller(AdminController::class)->group(function () {
                Route::get('/', 'edit')->name('edit');
                Route::post('/', 'update')->name('update');
            });
        });

         //Product Category
        Route::group(['prefix' => 'categories', 'as' => 'admin.categories.'], function () {
            Route::controller(ProductCategoryController::class)->group(function () {
                Route::get('/', 'index')->name('index');
            Route::get('/create', 'create')->name('create');
            Route::post('/store', 'store')->name('store');
            Route::get('/{id}/edit', 'edit')->name('edit');
            Route::post('/update', 'update')->name('update');
            Route::get('/{id}/delete', 'delete')->name('delete');
            });
        });
      
    });
});
