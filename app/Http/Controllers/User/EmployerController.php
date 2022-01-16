<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Users\Employer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\JsonResponse;
use Illuminate\Foundation\Auth\RegistersUsers;





class EmployerController extends Controller
{
    // use RegistersUsers;
    // public function __construct()
    // {
    //     $this->middleware('guest:admin');
    // }
    use RegistersUsers;
    protected $redirectTo = '/employer/home';

    protected function guard()
    {
        return Auth::guard('employer');
    }

    public function logout(Request $request)
    {
        // dd("aaaaaaaaaaaaaaaa");
        Auth::guard('employer')->logout();
        // dd("bbbbbbbbbbbbbbbbbb");
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return $request->wantsJson()
            ? new JsonResponse([], 204)
            : redirect('/');
    }

    protected function validator(array $data){
        if(is_numeric($data['email_or_phone'])){
            return Validator::make($data, [
            'name'=>'required',
            'email_or_phone'=>'required|unique:employers,email_or_phone',
            'password'=>'required|confirmed',
            'image'=>'required'
        ]);
        }else{
            return Validator::make($data, [
                'name'=>'required',
                'email_or_phone'=>'required|email|unique:employers,email_or_phone',
                'password'=>'required|confirmed',
                'image'=>'required'
            ]);
        };
    }

    protected function create(array $data)
    {
        // dd($data['image']);

        return Employer::create([
            'name' => $data['raquest']['name'],
            'email_or_phone' => $data['raquest']['email_or_phone'],
            'password' => Hash::make($data['raquest']['password']),
            'image'=>$data['image']
        ]);
    }


    // public function update(Request $request){
    //     //validation rules

    //     $request->validate([
    //         'name' =>'required|min:4|string|max:255',
    //         'email'=>'required|email|string|max:255'
    //     ]);
    //     $user =auth()::user();
    //     $user->update($request->all());
    //     return back()->with('message','Profile Updated');
    // }

}
