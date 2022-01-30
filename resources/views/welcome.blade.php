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
        {{--  {{ dd( Auth::user()) }}  --}}
        {{--  {{ dd($data) }}  --}}
        @if (Route::has('login'))

        @foreach ($datas as $data)
        {{--  {{ dump($data) }}  --}}
            @auth($data)
                    {{ Auth::guard($data)->user()->name }}
                @break
            @endauth
        @endforeach

        @endif
        @auth($data)
            @else
                <a href="{{ route('login') }}" class="text-sm text-gray-700 dark:text-gray-500 underline">Log in</a>
                @if (Route::has('register'))
                    <a href="{{ route('register') }}" class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline">Register</a>
                @endif
        @endauth




            {{--  @yield('student')  --}}



        <div id="root">
        </div>




    </body>

    <script src="/js/index.js"></script>
</html>
