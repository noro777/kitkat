<?php

namespace App\Http\Controllers\Work;

use App\Http\Controllers\Controller;
use App\Models\Work\Freelance;
use Illuminate\Http\Request;

class FreelanceController extends Controller
{
    public function create(Request $request){
        $data = $request->validate([
            'description'=>'required',
            'field'=>'required',
            'cost'=>'required'
        ]);

        Freelance::create($data);
        return redirect()->route('admin.freelance');

    }


    public function search(Request $req)
    {
        // dd($req->all());
        $request = $req->all()['search'];
        $freelances = Freelance::where('description','LIKE','%'.$request . '%')
        // ->orWhere('email_or_phone','LIKE','%'.$request.'%')
        ->get();

        return view('user.admin.freelance',compact('freelances'));
    }
}


