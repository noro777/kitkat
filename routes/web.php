<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\User\AdminController;
use App\Http\Controllers\User\EmployerController;
use App\Http\Middleware\RedirectIfAuthenticated;
use App\Models\Contact\Contact;
use App\Models\Facultets;
use App\Models\NewsSuggestions;
use App\Models\Services;
use App\Models\Users\Employer;
use App\Models\Users\Guest;
use App\Models\Users\Institution;
use App\Models\Users\Lecturer;
use App\Models\Users\Partner;
use App\Models\Users\Student;
use App\Models\Work\Freelance;
use App\Models\Work\Work;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return "uhwfuih";
// })->name('main');





// Auth::routes(['verify'=>true]);
// Route::view('/', 'welcome');

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


Route::group(['middleware' => 'prevent-back-history'], function ($guard) {


    Route::middleware(['guest:student','guest:admin','guest:employer','guest:guest','guest:institution','guest:lecturer','guest:partner'])
    ->group(function ($guard) {
        Route::view('/s','welcome');

    });


    // dd($guard);
    // dd(handle('student','admin','employer','guest','institution','lecturer','partner'));
    // dd(Auth::guard('student')->user());
    Route::view('/', 'welcome',['datas'=>['student','admin','employer','guest','institution','lecturer','partner']])->name('main');
    Route::view('/services', 'welcome')->name('services');
    Route::view('/contacts', 'welcome')->name('contacts');
    Route::view('/facultets', 'welcome')->name('facultets');


    //teacher lecturer
    //student
    //freelance employer
    //guest
    //partner
    //edcenter institut





    Route::name('admin.')->group(function () {

        Route::middleware(['guest:admin'])->prefix('admin')->group(function () {
            Route::view('/register', 'user.admin.register')->name('register');
            Route::post('/register', [AdminController::class,'register'])->name('create');
        });

        Route::middleware(['auth:admin'])->group(function () {

            Route::prefix('admin')->group(function () {

                $students = Student::all();
                $employers = Employer::all();
                $guests = Guest::all();
                $institutions = Institution::all();
                $lecturers = Lecturer::all();
                $partners = Partner::all();
                $contacts = Contact::all();
                $works = Work::all();
                $freelances = Freelance::all();
                $NewsSuggestions = NewsSuggestions::all();
                $facultets = Facultets::all();
                $services = Services::all();

                Route::view('/home', 'user.admin.home')->name('home');

                Route::view('/student','user.admin.student',compact('students'))->name('student');
                Route::post('/student','User\StudentController@search')->name('student.search');
                Route::post('/student/register','User\AdminController@register_students')->name('student.register');

                Route::view('/freelancer','user.admin.employer',compact('employers'))->name('employer');
                Route::post('/freelancer','User\EmployerController@search')->name('employer.search');
                Route::post('/freelancer/register','User\AdminController@register_employers')->name('employer.register');

                Route::view('/guest','user.admin.guest',compact('guests'))->name('guest');
                Route::post('/guest','User\GuestController@search')->name('guest.search');
                Route::post('/guest/register','User\AdminController@register_guests')->name('guest.register');

                Route::view('/edcenter','user.admin.institution',compact('institutions'))->name('institution');
                Route::post('/edcenter','User\InstitutionController@search')->name('institution.search');
                Route::post('/edcenter/register','User\AdminController@register_institutions')->name('institution.register');

                Route::view('/teacher','user.admin.lecturer',compact('lecturers'))->name('lecturer');
                Route::post('/teacher','User\LecturertController@search')->name('lecturer.search');
                Route::post('/teacher/register','User\AdminController@register_lecturers')->name('lecturer.register');

                Route::view('/partner','user.admin.partner',compact('partners'))->name('partner');
                Route::post('/partner','User\PartnerController@search')->name('partner.search');
                Route::post('/partner/register','User\AdminController@register_partners')->name('partner.register');



                Route::view('/contact','user.admin.contact',compact('contacts'))->name('contact');


                Route::view('/work','user.admin.work',compact('works'))->name('work');
                Route::view('/work/create','user.admin.work_create')->name('work.create');
                Route::post('/work/store','Work\WorkController@create')->name('work.store');
                Route::post('/work','Work\WorkController@search')->name('work.search');


                Route::view('/freelance','user.admin.freelance',compact('freelances'))->name('freelance');
                Route::view('/freelance/create','user.admin.freelance_create')->name('freelance.create');
                Route::post('/freelance/store','Work\FreelanceController@create')->name('freelance.store');
                Route::post('/freelance','Work\FreelanceController@search')->name('freelance.search');


                Route::view('/facultets','user.admin.facultets',compact('facultets'))->name('facultets');
                Route::view('/facultets/create','user.admin.facultets_create')->name('facultets.create');
                Route::post('/facultets/store','Facultets@create')->name('facultets.store');
                Route::post('/facultets','Facultets@search')->name('facultets.search');



                Route::view('/services','user.admin.services',compact('services'))->name('services');
                Route::view('/services/create','user.admin.services_create')->name('services.create');
                Route::post('/services/store','Services@create')->name('services.store');
                Route::post('/services','Services@search')->name('services.search');




                Route::view('/news_suggestion','user.admin.news_suggestions',compact('NewsSuggestions'))->name('NewsSuggestion');
                Route::view('/news_suggestions/create','user.admin.news_suggestions_create')->name('NewsSuggestionCreate');
                Route::post('/news_suggestions/store','NewsSuggestionsController@create')->name('news_suggestions.store');
                Route::post('/news_suggestions','NewsSuggestionsController@search')->name('news_suggestions.search');

            });

            Route::post('/logout', [AdminController::class,'logout'])->name('logout');
        });


    });

    // dd(auth()->user());
    // Route::name('auth.')->group(function () {

        // Route::middleware('auth:student')->group(function(){
        //     Route::view('/', 'welcome')->name('main');
        //     Route::view('/services', 'welcome')->name('services');
        //     Route::view('/contacts', 'welcome')->name('contacts');
        //     Route::view('/facultets', 'welcome')->name('facultets');
        //     Route::view('/lessons', 'welcome')->name('lessons');
        //     Route::view('/news', 'welcome')->name('news');
        // });

        // Route::middleware('auth:employer')->name('employer.')->group(function(){
        //     Route::view('/', 'welcome')->name('main');
        //     Route::view('/services', 'welcome')->name('services');
        //     Route::view('/contacts', 'welcome')->name('contacts');
        //     Route::view('/facultets', 'welcome')->name('facultets');
        //     Route::view('/lessons', 'welcome')->name('lessons');
        //     Route::view('/news', 'welcome')->name('news');
        // });

        // Route::middleware('auth:guest')->name('guest.')->group(function(){
        //     Route::view('/', 'welcome')->name('main');
        //     Route::view('/services', 'welcome')->name('services');
        //     Route::view('/contacts', 'welcome')->name('contacts');
        //     Route::view('/facultets', 'welcome')->name('facultets');
        //     Route::view('/lessons', 'welcome')->name('lessons');
        //     Route::view('/news', 'welcome')->name('news');
        // });

        // Route::middleware('auth:institution')->name('institution.')->group(function(){
        //     Route::view('/', 'welcome')->name('main');
        //     Route::view('/services', 'welcome')->name('services');
        //     Route::view('/contacts', 'welcome')->name('contacts');
        //     Route::view('/facultets', 'welcome')->name('facultets');
        //     Route::view('/lessons', 'welcome')->name('lessons');
        //     Route::view('/news', 'welcome')->name('news');
        // });

        // Route::middleware('auth:lecturer')->name('lecturer.')->group(function(){
        //     Route::view('/', 'welcome')->name('main');
        //     Route::view('/services', 'welcome')->name('services');
        //     Route::view('/contacts', 'welcome')->name('contacts');
        //     Route::view('/facultets', 'welcome')->name('facultets');
        //     Route::view('/lessons', 'welcome')->name('lessons');
        //     Route::view('/news', 'welcome')->name('news');
        // });

        // Route::middleware('auth:partner')->name('partner.')->group(function(){
        //     Route::view('/', 'welcome')->name('main');
        //     Route::view('/services', 'welcome')->name('services');
        //     Route::view('/contacts', 'welcome')->name('contacts');
        //     Route::view('/facultets', 'welcome')->name('facultets');
        //     Route::view('/lessons', 'welcome')->name('lessons');
        //     Route::view('/news', 'welcome')->name('news');
        // });

        // Route::middleware('auth:student')->name('student.')->group(function(){
        //     Route::view('/', 'welcome')->name('main');
        //     Route::view('/services', 'welcome')->name('services');
        //     Route::view('/contacts', 'welcome')->name('contacts');
        //     Route::view('/facultets', 'welcome')->name('facultets');
        //     Route::view('/lessons', 'welcome')->name('lessons');
        //     Route::view('/news', 'welcome')->name('news');
        // });


    // });






    Route::prefix('student')->name('student.')->group(function () {

    //     // Route::middleware(['guest:student'])->group(function () {
    Route::view('/register', 'user.student.register')->name('register');
    //     //     Route::post('/register', 'User\StudentController@register')->name('create');
    //     // });

    //     Route::middleware(['auth:student'])->group(function () {
    //         $students = Student::all();
    //         // Route::view('/home', 'user.student.home',compact('students'))->name('home');
    //         // Route::post('/logout', 'User\StudentController@logout')->name('logout');
    //         // Route::view('/', 'welcome')->name('main');
    //     });

    });


    Route::prefix('freelancer')->name('employer.')->group(function () {

        // Route::middleware(['guest:employer'])->group(function () {
            Route::view('/register', 'user.employer.register')->name('register');
        //     Route::post('/register', 'User\EmployerController@register')->name('create');
        // });

        // Route::middleware(['auth:employer'])->group(function () {
        //     Route::view('/home', 'user.employer.home')->name('home');
        //     Route::post('/logout', 'User\EmployerController@logout')->name('logout');
        // });
    });
    Route::prefix('guest')->name('guest.')->group(function () {

        // Route::middleware(['guest:guest'])->group(function () {
            Route::view('/register', 'user.guest.register')->name('register');
        //     Route::post('/register', 'User\GuestController@register')->name('create');
        // });

        // Route::middleware(['auth:guest'])->group(function () {
        //     Route::view('/home', 'user.guest.home')->name('home');
        //     Route::post('/logout', 'User\GuestController@logout')->name('logout');
        // });
    });

    Route::prefix('institution')->name('institution.')->group(function () {

        // Route::middleware(['guest:institution'])->group(function () {
            Route::view('/register', 'user.institution.register')->name('register');
        //     Route::post('/register', 'User\InstitutionController@register')->name('create');
        // });

        // Route::middleware(['auth:institution'])->group(function () {
        //     Route::view('/home', 'user.institution.home')->name('home');
        //     Route::post('/logout', 'User\InstitutionController@logout')->name('logout');
        // });
    });

    Route::prefix('lecturer')->name('lecturer.')->group(function () {

        // Route::middleware(['guest:lecturer'])->group(function () {
            Route::view('/register', 'user.lecturer.register')->name('register');
        //     Route::post('/register', 'User\LecturerController@register')->name('create');
        // });

        // Route::middleware(['auth:lecturer'])->group(function () {
        //     Route::view('/home', 'user.lecturer.home')->name('home');
        //     Route::post('/logout', 'User\LecturerController@logout')->name('logout');
        // });
    });

    Route::prefix('partner')->name('partner.')->group(function () {

        // Route::middleware(['guest:partner'])->group(function () {
            Route::view('/register', 'user.partner.register')->name('register');
        //     Route::post('/register', 'User\PartnerController@register')->name('create');
        // });

        // Route::middleware(['auth:partner'])->group(function () {
        //     Route::view('/home', 'user.partner.home')->name('home');
        //     Route::post('/logout', 'User\PartnerController@logout')->name('logout');
        // });
    });



    Route::middleware(['guest:student','guest:admin','guest:employer','guest:guest','guest:institution','guest:lecturer','guest:partner'])
    ->group(function () {

        Route::view('/admin', 'user.login')->name('login');
    //     Route::post('/login', 'Controller@login')->name('check');
    //     Route::view('/register', 'user.register')->name('register');
    });


});




