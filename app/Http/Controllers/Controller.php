<?php

namespace App\Http\Controllers;

use App\Models\Contact\Contact;
use Exception;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Foundation\Auth\AuthenticatesUsers;






class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    use AuthenticatesUsers;

    


    // public function __construct()
    // {
    //     $this->middleware('guest')->except('logout');
    // }



    // public function login(Request $request)
    // {
    //     $tables = array(
    //         'students',
    //         'admins',
    //         'employers',
    //         'guests',
    //         'institutions',
    //         'lecturers',
    //         'partners',

    //     );



        // if(is_numeric($request->email_or_phone)){
        //     $request->validate([
        //         'email_or_phone'=>'required',
        //         'password'=>'required'
        //     ]);
        // }else{
        //     $request->validate([
        //         'email_or_phone'=>'required|email',
        //         'password'=>'required'
        //     ]);
        // }

        // $creds = $request->only('email_or_phone','password');


        // foreach($tables as $table){

        //     $u = DB::table($table)->where('email_or_phone',$creds['email_or_phone'])->first();
        //     if($u != null){
        //         $u = (array)$u;
        //         break;
        //     };
        // }
        // if($u == null)
        // return redirect()->route('login')->with('fail','sxal login');


        // if(Auth::guard($u['category'])->attempt($creds)){
        //     // $this->middleware('guest')->except('logout');
        //     return redirect()->route($u['category'].'.home');
        // }else{

            // return redirect()->route('login')->with('fail','sxal  parol');
        // }

    // }


}
