<!DOCTYPE html>
<html lang="en">

<head>
	<title>@yield('title') - {{ config('app.name') }}</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="stylesheet" type="text/css" href="{{ asset('backend/css/main.css') }}" />
	<link rel="stylesheet" type="text/css"
		href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
	<link rel="stylesheet" type="text/css"
		href="{{ asset('backend/css/font-awesome/4.7.0/css/font-awesome.min.css') }}" />
		@stack('styles')
		{{-- @vite(['resources/js/app.js', 'resources/css/app.css']) --}}
</head>

<body class="app sidebar-mini">
	@include('admin.partials.header')
	@include('admin.partials.sidebar')
	<main class="app-content">
		@yield('content')
	</main>
	<script src="{{ asset('backend/js/jquery-3.7.0.min.js') }}"></script>
	<script src="{{ asset('backend/js/bootstrap.min.js') }}"></script>
	<script src="{{ asset('backend/js/main.js') }}"></script>
	@stack('scripts')

</body>

</html>