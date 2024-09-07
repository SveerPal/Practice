<?php

namespace App\Providers;

use App\Contracts\ProductCategoryContract;
use Illuminate\Support\ServiceProvider;
use App\Repositories\ProductCategoryRepository;

class RepositoryServiceProvider extends ServiceProvider
{
    protected $repositories = [
        ProductCategoryContract::class => ProductCategoryRepository::class,
    ];

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        foreach ($this->repositories as $interface => $implementation) {
            $this->app->bind($interface, $implementation);
        }
    }
}
