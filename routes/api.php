<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

use Illuminate\Support\Facades\Storage;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/tvyal', function () {
    // return app()->getLocale();
    // return session()->get('locale');
    if(session()->get('locale')=='en'){
        return [
            "en"=>"en",
            "hy"=>"hy",
            "ru"=>"ru",
            "glxavor"=>"glxavor"
        ];
    }else if(session()->get('locale')=='hy'){
        return [
            "en"=>"են",
            "hy"=>__('hay'),
            "ru"=>"ռու",
            "glxavor"=>"գլխավոր"
        ];
    }else if(session()->get('locale')=='ru'){
        return [
            "en"=>"ен",
            "hy"=>"хай",
            "ru"=>"ру",
            "glxavor"=>"главни"
        ];
    }

    return;

})->name('tvyal');


Route::post('lang/change', 'LangController@change')->name('changeLang');


Route::get('/qrcode-with-image', function () {
    $image = QrCode::
    // ->merge('/public/images/logo.png', 0.5, true)
                    size(500)->errorCorrection('H')
                    ->generate('A simple example of QR code!');
    $output_file = '/img/qr-code/img-' . time() . '.svg';
    Storage::disk('public')->put($output_file, $image);

    //storage/app/public/img/qr-code/img-1557309130.png

    return ;
});
