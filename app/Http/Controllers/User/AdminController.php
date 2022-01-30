<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\NewsSuggestions;
use App\Models\Users\Admin;
use App\Models\Users\Employer;
use App\Models\Users\Guest;
use App\Models\Users\Institution;
use App\Models\Users\Lecturer;
use App\Models\Users\Partner;
use App\Models\Users\Student;
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



    public function register_students(Request $request)
    {
        $data = $request->all();
        // dd($data);
        if(is_numeric($data['email_or_phone'])){
            // dd("hhhhhhhhhhhhh");

            Validator::make($data, [
            'name'=>'required',
            'email_or_phone'=>'required|unique:students,email_or_phone',
            'password'=>'required|confirmed'
        ]);
        }else{
            Validator::make($data, [
                'name'=>'required',
                'email_or_phone'=>'required|email|unique:students,email_or_phone',
                'password'=>'required|confirmed'
            ]);
        };

        if($request->hasFile('image')){
            // return false;
            // dd("hhhhhhhhjjjjjjhhhhh");
            $image      = $request->file('image');
            $fileName   = time() . '.' . $image->getClientOriginalExtension();
            $image->move('images/'.$data['category'],$fileName);

            $data1 = [
                'name' => $data['name'],
                'email_or_phone' => $data['email_or_phone'],
                'password' => Hash::make($data['password']),
                'image'=>$fileName
            ];

            Student::create($data1);
        }else{
            $data1 = [
                'name' => $data['name'],
                'email_or_phone' => $data['email_or_phone'],
                'password' => Hash::make($data['password']),
            ];

            Student::create($data1);
        }

        return redirect()->route('admin.student');

    }

    public function register_employers(Request $request)
    {
        $data = $request->all();
        // dd($data);
        if(is_numeric($data['email_or_phone'])){
            // dd("hhhhhhhhhhhhh");

            Validator::make($data, [
            'name'=>'required',
            'email_or_phone'=>'required|unique:students,email_or_phone',
            'password'=>'required|confirmed'
        ]);
        }else{
            Validator::make($data, [
                'name'=>'required',
                'email_or_phone'=>'required|email|unique:students,email_or_phone',
                'password'=>'required|confirmed'
            ]);
        };

        if($request->hasFile('image')){
            // return false;
            // dd("hhhhhhhhjjjjjjhhhhh");
            $image      = $request->file('image');
            $fileName   = time() . '.' . $image->getClientOriginalExtension();
            $image->move('images/'.$data['category'],$fileName);

            $data1 = [
                'name' => $data['name'],
                'email_or_phone' => $data['email_or_phone'],
                'password' => Hash::make($data['password']),
                'image'=>$fileName
            ];

            Employer::create($data1);
        }else{
            $data1 = [
                'name' => $data['name'],
                'email_or_phone' => $data['email_or_phone'],
                'password' => Hash::make($data['password']),
            ];

            Employer::create($data1);
        }

        return redirect()->route('admin.employer');
    }

    public function register_guests(Request $request)
    {
        $data = $request->all();
        // dd($data);
        if(is_numeric($data['email_or_phone'])){
            // dd("hhhhhhhhhhhhh");

            Validator::make($data, [
            'name'=>'required',
            'email_or_phone'=>'required|unique:students,email_or_phone',
            'password'=>'required|confirmed'
        ]);
        }else{
            Validator::make($data, [
                'name'=>'required',
                'email_or_phone'=>'required|email|unique:students,email_or_phone',
                'password'=>'required|confirmed'
            ]);
        };

        if($request->hasFile('image')){
            // return false;
            // dd("hhhhhhhhjjjjjjhhhhh");
            $image      = $request->file('image');
            $fileName   = time() . '.' . $image->getClientOriginalExtension();
            $image->move('images/'.$data['category'],$fileName);

            $data1 = [
                'name' => $data['name'],
                'email_or_phone' => $data['email_or_phone'],
                'password' => Hash::make($data['password']),
                'image'=>$fileName
            ];

            Guest::create($data1);
        }else{
            $data1 = [
                'name' => $data['name'],
                'email_or_phone' => $data['email_or_phone'],
                'password' => Hash::make($data['password']),
            ];

            Guest::create($data1);
        }

        return redirect()->route('admin.guest');
    }

    public function register_institutions(Request $request)
    {
        $data = $request->all();
        // dd($data);
        if(is_numeric($data['email_or_phone'])){
            // dd("hhhhhhhhhhhhh");

            Validator::make($data, [
            'name'=>'required',
            'email_or_phone'=>'required|unique:students,email_or_phone',
            'password'=>'required|confirmed'
        ]);
        }else{
            Validator::make($data, [
                'name'=>'required',
                'email_or_phone'=>'required|email|unique:students,email_or_phone',
                'password'=>'required|confirmed'
            ]);
        };

        if($request->hasFile('image')){
            // return false;
            // dd("hhhhhhhhjjjjjjhhhhh");
            $image      = $request->file('image');
            $fileName   = time() . '.' . $image->getClientOriginalExtension();
            $image->move('images/'.$data['category'],$fileName);

            $data1 = [
                'name' => $data['name'],
                'email_or_phone' => $data['email_or_phone'],
                'password' => Hash::make($data['password']),
                'image'=>$fileName
            ];

            Institution::create($data1);
        }else{
            $data1 = [
                'name' => $data['name'],
                'email_or_phone' => $data['email_or_phone'],
                'password' => Hash::make($data['password']),
            ];

            Institution::create($data1);
        }

        return redirect()->route('admin.institution');
    }

    public function register_lecturers(Request $request)
    {
        $data = $request->all();
        // dd($data);
        if(is_numeric($data['email_or_phone'])){
            // dd("hhhhhhhhhhhhh");

            Validator::make($data, [
            'name'=>'required',
            'email_or_phone'=>'required|unique:students,email_or_phone',
            'password'=>'required|confirmed'
        ]);
        }else{
            Validator::make($data, [
                'name'=>'required',
                'email_or_phone'=>'required|email|unique:students,email_or_phone',
                'password'=>'required|confirmed'
            ]);
        };

        if($request->hasFile('image')){
            // return false;
            // dd("hhhhhhhhjjjjjjhhhhh");
            $image      = $request->file('image');
            $fileName   = time() . '.' . $image->getClientOriginalExtension();
            $image->move('images/'.$data['category'],$fileName);

            $data1 = [
                'name' => $data['name'],
                'email_or_phone' => $data['email_or_phone'],
                'password' => Hash::make($data['password']),
                'image'=>$fileName
            ];

            Lecturer::create($data1);
        }else{
            $data1 = [
                'name' => $data['name'],
                'email_or_phone' => $data['email_or_phone'],
                'password' => Hash::make($data['password']),
            ];

            Lecturer::create($data1);
        }

        return redirect()->route('admin.lecturer');
    }

    public function register_partners(Request $request)
    {
        $data = $request->all();
        // dd($data);
        if(is_numeric($data['email_or_phone'])){
            // dd("hhhhhhhhhhhhh");

            Validator::make($data, [
            'name'=>'required',
            'email_or_phone'=>'required|unique:students,email_or_phone',
            'password'=>'required|confirmed'
        ]);
        }else{
            Validator::make($data, [
                'name'=>'required',
                'email_or_phone'=>'required|email|unique:students,email_or_phone',
                'password'=>'required|confirmed'
            ]);
        };

        if($request->hasFile('image')){
            // return false;
            // dd("hhhhhhhhjjjjjjhhhhh");
            $image      = $request->file('image');
            $fileName   = time() . '.' . $image->getClientOriginalExtension();
            $image->move('images/'.$data['category'],$fileName);

            $data1 = [
                'name' => $data['name'],
                'email_or_phone' => $data['email_or_phone'],
                'password' => Hash::make($data['password']),
                'image'=>$fileName
            ];

            Partner::create($data1);
        }else{
            $data1 = [
                'name' => $data['name'],
                'email_or_phone' => $data['email_or_phone'],
                'password' => Hash::make($data['password']),
            ];

            Partner::create($data1);
        }

        return redirect()->route('admin.partner');
    }








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

