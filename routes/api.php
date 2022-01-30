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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::post('lang/change', 'LangController@change')->name('changeLang');


Route::post('/contact','Contact\ContactController@index')->name('contact');


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



Route::middleware(['guest:student','guest:admin','guest:employer','guest:guest','guest:institution','guest:lecturer','guest:partner'])
    ->group(function () {
        Route::post('/login', 'Controller@login')->name('check');



        Route::post('/student/register', 'User\StudentController@register')->name('student.create');
        Route::post('/student/logout', 'User\StudentController@logout')->name('student.logout');

        Route::post('/freelancer/register', 'User\EmployerController@register')->name('freelancer.create');
        Route::post('/freelancer/logout', 'User\EmployerController@logout')->name('freelancer.logout');

        Route::post('/guest/register', 'User\GuestController@register')->name('guest.create');
        Route::post('/guest/logout', 'User\GuestController@logout')->name('guest.logout');

        Route::post('/ed_center/register', 'User\InstitutionController@register')->name('ed_center.create');
        Route::post('/ed_center/logout', 'User\InstitutionController@logout')->name('ed_center.logout');

        Route::post('/teacher/register', 'User\LecturerController@register')->name('teacher.create');
        Route::post('/teacher/logout', 'User\LecturerController@logout')->name('teacher.logout');

        Route::post('/partner/register', 'User\PartnerController@register')->name('partner.create');
        Route::post('/partner/logout', 'User\PartnerController@logout')->name('partner.logout');

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



