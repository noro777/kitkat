<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Users\Lecturer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\JsonResponse;
use Illuminate\Foundation\Auth\RegistersUsers;



class LecturerController extends Controller
{
    use RegistersUsers;
    protected $redirectTo = '/lecturer/home';
    // public function __construct()
    // {
    //     $this->middleware('guest:admin');
    // }

    protected function validator(array $data){
        if(is_numeric($data['email_or_phone'])){
            return Validator::make($data, [
            'name'=>'required',
            'email_or_phone'=>'required|unique:lecturers,email_or_phone',
            'password'=>'required|confirmed',
            'image'=>'required'
        ]);
        }else{
            return Validator::make($data, [
                'name'=>'required',
                'email_or_phone'=>'required|email|unique:lecturers,email_or_phone',
                'password'=>'required|confirmed',
                'image'=>'required'
            ]);
        };
    }

    protected function create(array $data)
    {
        return Lecturer::create([
            'name' => $data['raquest']['name'],
            'email_or_phone' => $data['raquest']['email_or_phone'],
            'password' => Hash::make($data['raquest']['password']),
            'image'=>$data['image']
        ]);
    }

    protected function guard()
    {
        return Auth::guard('lecturer');
    }

    public function logout(Request $request)
    {
        // dd("aaaaaaaaaaaaaaaa");
        Auth::guard('lecturer')->logout();
        // dd("bbbbbbbbbbbbbbbbbb");
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return $request->wantsJson()
            ? new JsonResponse([], 204)
            : redirect('/');
    }
}
