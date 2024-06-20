https://github.com/pratikborsadiya/vali-admin

composer create-project --prefer-dist laravel/laravel ecommerce-app

php artisan install:api

From ecommerce-templates/vali-admin folder, copy css and js folders and paste them in resources/backend. You will need to create backend folder inside the resources folder.

Next, from ecommerce-templates/ui-ecommerce folder, copy css, fonts, images, js and plugins folders and paste them in resources/frontend folder. You will need to create frontend folder.

npm install
Setting Up webpack.mix.js File
	 mix.copyDirectory('resources/backend', 'public/backend');
	mix.copyDirectory('resources/frontend', 'public/frontend');

npm run watch

web.php
	Route::view('/admin', 'admin.dashboard.index');
	
We will create a new folder named admin inside resources/views folder. Inside admin folder, we will create a new file called app.blade.php.	
Let’s create a folder inside resources/admin folder called partials and add two new files named header.blade.php and sidebar.blade.php.
Inside resources/admin folder, create a new folder named dashboard and add a new file called index.blade.php
	