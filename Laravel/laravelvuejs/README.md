#TODO CRUD
    composer create-project laravel/laravel laravelvuejs
    composer require laravel/ui
    php artisan ui vue --auth

    npm install: install package
    npm run dev: compiled all file  
    npm run watch: it will use for chahnge anything in js automaicly reflect

    make db connecion then run below command
    php artisan migrate

    resource/js/app.js for vue config

    this file need to call all template where using vue temaplte 
        blade file use  <div id="app" ><component name /></div>
        

    npm install --save axios vue-axios	
    
#Larvel Debuuger
    composer require barryvdh/laravel-debugbar 
    composer update
    php artisan vendor:publish --provider="Barryvdh\Debugbar\ServiceProvider" --tag="config"


    config/debugbar.php	
    'enabled' => env('APP_DEBUG', false),

    APP_DEBUG=true
    php artisan config:cache
