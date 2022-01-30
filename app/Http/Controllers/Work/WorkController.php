<?php

namespace App\Http\Controllers\Work;

use App\Http\Controllers\Controller;
use App\Models\Work\Work;
use Illuminate\Http\Request;

class WorkController extends Controller
{
    public function create(Request $request){
        $data = $request->validate([
            'description'=>'required',
            'address'=>'required',
        ]);

        Work::create($data);
        return redirect()->route('admin.work');

    }

    public function search(Request $req)
    {
        // dd($req->all());
        $request = $req->all()['search'];
        $works = Work::where('description','LIKE','%'.$request . '%')
        // ->orWhere('email_or_phone','LIKE','%'.$request.'%')
        ->get();

        return view('user.admin.work',compact('works'));
    }
}
