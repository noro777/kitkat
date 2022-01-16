<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Users\Student;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;




class StudentController extends Controller
{
    use RegistersUsers;
    protected $redirectTo = '/student/home';
    // public function __construct()
    // {
    //     $this->middleware('guest:admin');
    // }

    protected function validator(array $data){
        // return "adsa";
        if(is_numeric($data['email_or_phone'])){
            return Validator::make($data, [
            'name'=>'required',
            'email_or_phone'=>'required|unique:students,email_or_phone',
            'password'=>'required|confirmed'
        ]);
        }else{
            return Validator::make($data, [
                'name'=>'required',
                'email_or_phone'=>'required|email|unique:students,email_or_phone',
                'password'=>'required|confirmed'
            ]);
        };
    }

    protected function create(array $data)
    {
        $data1 = [
            'name' => $data['raquest']['name'],
            'email_or_phone' => $data['raquest']['email_or_phone'],
            'password' => Hash::make($data['raquest']['password']),
            'image'=>$data['image']
        ];

        return Student::create($data1);
    }

    protected function guard()
    {
        return Auth::guard('student');
    }

    public function logout(Request $request)
    {
        // dd("aaaaaaaaaaaaaaaa");
        Auth::guard('student')->logout();
        // dd("bbbbbbbbbbbbbbbbbb");
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return $request->wantsJson()
            ? new JsonResponse([], 204)
            : redirect('/');
    }
}

