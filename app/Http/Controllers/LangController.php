<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\App;
use Illuminate\Http\Request;

class LangController extends Controller
{
    public function change(Request $request)
    {
        // return $request->lang;
        App::setLocale($request->lang);
        session()->put('locale', $request->lang);

        return [
                "en"=>__('en'),
                "hy"=>__('hay'),
                "ru"=>__('ru'),
                "glxavor"=>"գլխավոր"
            ];

    }
}
