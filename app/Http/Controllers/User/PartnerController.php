<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Users\Partner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\JsonResponse;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Route;


class PartnerController extends Controller
{
    use RegistersUsers;
    protected $redirectTo = '/partner/home';
    // public function __construct()
    // {
    //     $this->middleware('guest:admin');
    // }

    protected function validator(array $data){
        if(is_numeric($data['email_or_phone'])){
            return Validator::make($data, [
            'name'=>'required',
            'email_or_phone'=>'required|unique:employers,email_or_phone|unique:students,email_or_phone|unique:guests,email_or_phone|unique:institutions,email_or_phone|unique:partners,email_or_phone|unique:lecturers,email_or_phone',
            'password'=>'required|confirmed',
            'image'=>'required'
        ]);
        }else{
            return Validator::make($data, [
                'name'=>'required',
                'email_or_phone'=>'required|unique:employers,email_or_phone|unique:students,email_or_phone|unique:guests,email_or_phone|unique:institutions,email_or_phone|unique:partners,email_or_phone|unique:lecturers,email_or_phone',
                'password'=>'required|confirmed',
                'image'=>'required'
            ]);
        };
    }

    protected function create(array $data)
    {
        return Partner::create([
            'name' => $data['raquest']['name'],
            'email_or_phone' => $data['raquest']['email_or_phone'],
            'password' => Hash::make($data['raquest']['password']),
            'image'=>$data['image']
        ]);
    }

    protected function guard()
    {
        return Auth::guard('partner');
    }

    public function logout(Request $request)
    {
        Auth::guard('partner')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return $request->wantsJson()
            ? new JsonResponse([], 204)
            : redirect('/');
    }

    public function search(Request $req)
    {
        // dd($req->all());
        $request = $req->all()['search'];
        $partners = Partner::where('name','LIKE','%'.$request . '%')
        ->orWhere('email_or_phone','LIKE','%'.$request.'%')
        ->get();

        return Route::view('/partner','user.admin.partner',compact('partners'));
    }
}
