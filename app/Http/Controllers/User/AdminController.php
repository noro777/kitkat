<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\NewsSuggestions;
use App\Models\Users\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

use Illuminate\Http\JsonResponse;

class AdminController extends Controller
{


    use RegistersUsers;
    // use AuthenticatesUsers;
    protected $redirectTo = '/admin/home';



    public function news_suggestions($request)
    {
        $request->validate([
            'name'=>'required|string',
            'content'=>'required',
        ]);

        NewsSuggestions::create($request);
        return redirect()->route('admin.NewsSuggestion');

    }

    // public function __construct()
    // {
    //     $this->middleware('guest:admin');
    // }

    protected function validator(array $data){
        if(is_numeric($data['email_or_phone'])){
            return Validator::make($data, [
            'name'=>'required',
            'email_or_phone'=>'required|unique:admins,email_or_phone',
            'password'=>'required|confirmed'
        ]);
        }else{
            return Validator::make($data, [
                'name'=>'required',
                'email_or_phone'=>'required|email|unique:admins,email_or_phone',
                'password'=>'required|confirmed'
            ]);
        };
    }

    protected function create(array $data)
    {
        return Admin::create([
            'name' => $data['name'],
            'email_or_phone' => $data['email_or_phone'],
            'password' => Hash::make($data['password']),
        ]);
    }

    protected function guard()
    {
        return Auth::guard('admin');
    }

    //login

    // public function loginn(Request $request)
    // {
    //     $this->middleware('guest:admin')->except('logout');
    //     $this->login($request);

    //     // $tables = array(
    //         //         'students',
    //         //         'admins',
    //         //         'employers',
    //         //         'guests',
    //         //         'institutions',
    //         //         'lecturers',
    //         //         'partners',

    //         //     );



    //             // if(is_numeric($request->email_or_phone)){
    //             //     $request->validate([
    //             //         'email_or_phone'=>'required',
    //             //         'password'=>'required'
    //             //     ]);
    //             // }else{
    //             //     $request->validate([
    //             //         'email_or_phone'=>'required|email',
    //             //         'password'=>'required'
    //             //     ]);
    //             // }

    //             // $creds = $request->only('email_or_phone','password');


    //             // foreach($tables as $table){

    //             //     $u = DB::table($table)->where('email_or_phone',$creds['email_or_phone'])->first();
    //             //     if($u != null){
    //             //         $u = (array)$u;
    //             //         break;
    //             //     };
    //             // }
    //             // if($u == null)
    //             // return redirect()->route('login')->with('fail','sxal login');
    // }




    //logout

    public function logout(Request $request)
    {
        // dd("aaaaaaaaaaaaaaaa");
        Auth::guard('admin')->logout();
        // dd("bbbbbbbbbbbbbbbbbb");
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return $request->wantsJson()
            ? new JsonResponse([], 204)
            : redirect('/');
    }
}

