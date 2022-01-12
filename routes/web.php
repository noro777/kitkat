<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\User\AdminController;
use App\Http\Controllers\User\EmployerController;
use App\Models\Contact\Contact;
use App\Models\NewsSuggestions;
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





Route::view('/services', 'welcome')->name('services');
Route::view('/contacts', 'welcome')->name('contacts');

// Auth::routes(['verify'=>true]);
// Route::view('/', 'welcome');

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::post('/contact','Contact\ContactController@index')->name('contact');




Route::group(['middleware' => 'prevent-back-history'], function () {

    Route::middleware(['guest:student','guest:admin','guest:employer','guest:guest','guest:institution','guest:lecturer','guest:partner'])
    ->group(function () {

        Route::view('/', 'welcome')->name('main');

        Route::view('/login', 'user.login')->name('login');
        Route::post('/login', 'Controller@login')->name('check');
        Route::view('/register', 'user.register')->name('register');
    });

    Route::prefix('admin')->name('admin.')->group(function () {

        Route::middleware(['guest:admin'])->group(function () {
            Route::view('/register', 'user.admin.register')->name('register');
            Route::post('/register', [AdminController::class,'register'])->name('create');


        });

        Route::middleware(['auth:admin'])->group(function () {
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

            Route::view('/home', 'user.admin.home')->name('home');
            Route::view('/student','user.admin.student',compact('students'))->name('student');
            Route::view('/employer','user.admin.employer',compact('employers'))->name('employer');
            Route::view('/guest','user.admin.guest',compact('guests'))->name('guest');
            Route::view('/institution','user.admin.institution',compact('institutions'))->name('institution');
            Route::view('/lecturer','user.admin.lecturer',compact('lecturers'))->name('lecturer');
            Route::view('/partner','user.admin.partner',compact('partners'))->name('partner');

            Route::view('/contact','user.admin.contact',compact('contacts'))->name('contact');


            Route::view('/freelance','user.admin.freelance',compact('freelances'))->name('freelance');
            Route::view('/freelance/create','user.admin.freelance_create')->name('freelance.create');
            Route::post('/freelance/store','Work\FreelanceController@create')->name('freelance.store');


            Route::view('/work','user.admin.work',compact('works'))->name('work');
            Route::view('/work/create','user.admin.work_create')->name('work.create');
            Route::post('/work/store','Work\WorkController@create')->name('work.store');


            Route::view('/news_suggestion','user.admin.news_suggestions',compact('NewsSuggestions'))->name('NewsSuggestion');
            Route::view('/news_suggestions/create','user.admin.news_suggestions_create')->name('NewsSuggestionCreate');
            Route::post('/news_suggestions/store','NewsSuggestionsController@create')->name('news_suggestions.store');


            Route::view('/', 'welcome')->name('main');
            Route::view('/services', 'welcome')->name('services');
            Route::view('/contacts', 'welcome')->name('contacts');


            Route::post('/logout', [AdminController::class,'logout'])->name('logout');
        });

    });
    Route::prefix('student')->name('student.')->group(function () {

        Route::middleware(['guest:student'])->group(function () {
            Route::view('/register', 'user.student.register')->name('register');
            Route::post('/register', 'User\StudentController@register')->name('create');
        });

        Route::middleware(['auth:student'])->group(function () {
            $students = Student::all();
            Route::view('/home', 'user.student.home',compact('students'))->name('home');
            Route::post('/logout', 'User\StudentController@logout')->name('logout');
            Route::view('/', 'welcome')->name('main');
            Route::view('/services', 'welcome')->name('services');
            Route::view('/contacts', 'welcome')->name('contacts');
        });
    });


    Route::prefix('employer')->name('employer.')->group(function () {

        Route::middleware(['guest:employer'])->group(function () {
            Route::view('/register', 'user.employer.register')->name('register');
            Route::post('/register', 'User\EmployerController@register')->name('create');
        });

        Route::middleware(['auth:employer'])->group(function () {
            Route::view('/home', 'user.employer.home')->name('home');
            Route::post('/logout', 'User\EmployerController@logout')->name('logout');
            Route::view('/', 'welcome')->name('main');
            Route::view('/services', 'welcome')->name('services');
            Route::view('/contacts', 'welcome')->name('contacts');
        });
    });
    Route::prefix('guest')->name('guest.')->group(function () {

        Route::middleware(['guest:guest'])->group(function () {
            Route::view('/register', 'user.guest.register')->name('register');
            Route::post('/register', 'User\GuestController@register')->name('create');
        });

        Route::middleware(['auth:guest'])->group(function () {
            Route::view('/home', 'user.guest.home')->name('home');
            Route::post('/logout', 'User\GuestController@logout')->name('logout');
            Route::view('/', 'welcome')->name('main');
            Route::view('/services', 'welcome')->name('services');
            Route::view('/contacts', 'welcome')->name('contacts');
        });
    });

    Route::prefix('institution')->name('institution.')->group(function () {

        Route::middleware(['guest:institution'])->group(function () {
            Route::view('/register', 'user.institution.register')->name('register');
            Route::post('/register', 'User\InstitutionController@register')->name('create');
        });

        Route::middleware(['auth:institution'])->group(function () {
            Route::view('/home', 'user.institution.home')->name('home');
            Route::post('/logout', 'User\InstitutionController@logout')->name('logout');
            Route::view('/', 'welcome')->name('main');
            Route::view('/services', 'welcome')->name('services');
            Route::view('/contacts', 'welcome')->name('contacts');
        });
    });

    Route::prefix('lecturer')->name('lecturer.')->group(function () {

        Route::middleware(['guest:lecturer'])->group(function () {
            Route::view('/register', 'user.lecturer.register')->name('register');
            Route::post('/register', 'User\LecturerController@register')->name('create');
        });

        Route::middleware(['auth:lecturer'])->group(function () {
            Route::view('/home', 'user.lecturer.home')->name('home');
            Route::post('/logout', 'User\LecturerController@logout')->name('logout');
            Route::view('/', 'welcome')->name('main');
            Route::view('/services', 'welcome')->name('services');
            Route::view('/contacts', 'welcome')->name('contacts');
        });
    });

    Route::prefix('partner')->name('partner.')->group(function () {

        Route::middleware(['guest:partner'])->group(function () {
            Route::view('/register', 'user.partner.register')->name('register');
            Route::post('/register', 'User\PartnerController@register')->name('create');
        });

        Route::middleware(['auth:partner'])->group(function () {
            Route::view('/home', 'user.partner.home')->name('home');
            Route::post('/logout', 'User\PartnerController@logout')->name('logout');
            Route::view('/', 'welcome')->name('main');
            Route::view('/services', 'welcome')->name('services');
            Route::view('/contacts', 'welcome')->name('contacts');
        });
    });


});




