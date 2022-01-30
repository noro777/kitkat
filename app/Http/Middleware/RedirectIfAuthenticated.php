<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @param  string|null  ...$guards
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, ...$guards)
    {
        $guards = empty($guards) ? [null] : $guards;

        foreach ($guards as $guard) {
            // dd($request->all());
            // dump(auth($guard)->user()->name);
            // dump($guard);
            // dd(Auth::guard($guard)->check());
            // dump(Auth::guard('student')->user());

            if (Auth::guard($guard)->check()) {
                // dd('auth.'.$guard.'main');
                // dd($guard);
                return redirect()->route('main');
                // return redirect()->route($guard.'.auth.main');
                // return redirect(RouteServiceProvider::HOME);
            }
        }

        return $next($request);
    }


}
