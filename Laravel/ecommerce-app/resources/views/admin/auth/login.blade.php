<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="{{ asset('backend/css/main.css') }}" />
    <link rel="stylesheet" type="text/css"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <title>Login - {{-- config('app.name') --}}{{ config('settings.site_name') }}</title>
</head>

<body>
    <section class="material-half-bg">
        <div class="cover"></div>
    </section>
    <section class="login-content">
        <div class="logo">
            <h1> 
            @if (config('settings.site_name'))
                {{ config('settings.site_name') }}
            @else
                {{ config('app.name') }}
            @endif
            </h1>
        </div>
        <div class="login-box">
            <form class="login-form" action="{{ route('admin.login.post') }}" method="POST" role="form">
                @csrf
                <h3 class="login-head"><i class="bi bi-person me-2"></i>SIGN IN</h3>
                <div class="mb-3">
                    <label class="form-label" for="email">Email Address</label>
                    <input class="form-control" type="email" id="email" name="email" placeholder="Email address"
                        autofocus value="{{ old('email') }}">
                </div>
                <div class="mb-3">
                    <label class="form-label" for="password">Password</label>
                    <input class="form-control" type="password" id="password" name="password" placeholder="Password">
                </div>
                <div class="mb-3">
                    <div class="utility">
                        <div class="form-check">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" name="remember"><span
                                    class="label-text">Stay Signed in</span>
                            </label>
                        </div>
                        <p class="semibold-text mb-2"><a href="#" data-toggle="flip">Forgot Password ?</a></p>
                    </div>
                </div>
                <div class="mb-3 btn-container d-grid">
                    <button class="btn btn-primary btn-block" type="submit"><i
                            class="fa fa-sign-in fa-lg fa-fw"></i>SIGN IN</button>
                </div>
            </form>
            <form class="forget-form" action="index.html">
                <h3 class="login-head"><i class="bi bi-person-lock me-2"></i>Forgot Password ?</h3>
                <div class="mb-3">
                    <label class="form-label">EMAIL</label>
                    <input class="form-control" type="text" placeholder="Email">
                </div>
                <div class="mb-3 btn-container d-grid">
                    <button class="btn btn-primary btn-block"><i class="bi bi-unlock me-2 fs-5"></i>RESET</button>
                </div>
                <div class="mb-3 mt-3">
                    <p class="semibold-text mb-0"><a href="#" data-toggle="flip"><i class="bi bi-chevron-left me-1"></i>
                            Back to Login</a></p>
                </div>
            </form>
        </div>
    </section>
    <script src="http://127.0.0.1:8000/backend/js/jquery-3.7.0.min.js"></script>
    <script src="http://127.0.0.1:8000/backend/js/bootstrap.min.js"></script>
    <script src="http://127.0.0.1:8000/backend/js/main.js"></script>
    <script src="http://127.0.0.1:8000/backend/js/plugins/pace.min.js"></script>
    <script type="text/javascript">
        // Login Page Flipbox control
        $('.login-content [data-toggle="flip"]').click(function () {
            $('.login-box').toggleClass('flipped');
            return false;
        });
    </script>
</body>

</html>