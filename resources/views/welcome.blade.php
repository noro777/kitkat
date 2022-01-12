<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

        <title>Laravel</title>


    </head>
    <body>

        <div id="root">
        </div>


            @if (Route::has('login'))

                    @auth
                        <a href="{{ route('changeLang',['lang'=>'en']) }}">en</a>
                        <a href="{{ route('changeLang',['lang'=>'ru']) }}">ru</a>
                        <a href="{{ route('changeLang',['lang'=>'hy']) }}">hy</a>
                        {{ auth()->user() }}

                    @else
                        <a href="{{ route('login') }}" class="text-sm text-gray-700 dark:text-gray-500 underline">Log in</a>
                        @if (Route::has('register'))
                            <a href="{{ route('register') }}" class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline">Register</a>
                        @endif
                    @endauth
            @endif


            @yield('student')
    </body>

    <script src="/js/index.js"></script>
</html>
