<?php

namespace App\Http\Controllers;

use App\Models\Services as ModelsServices;
use Illuminate\Http\Request;

class Services extends Controller
{
    public function create(Request $request)
    {
        // dd($request);
        $data = $request->validate([
            'name'=>'required',
            'image'=>'required',
            'content'=>'required',
            ''
        ]);
        if($request->hasFile('image')){
            $image      = $request->file('image');
            $fileName   = time() . '.' . $image->getClientOriginalExtension();
            $image->move('images/services',$fileName);
            $data['image']  = $fileName;

            ModelsServices::create($data);
        }else{
            ModelsServices::create($data);
        }
        return redirect()->route('admin.services');
    }

    public function search(Request $req)
    {
        // dd($req->all());
        $request = $req->all()['search'];
        $services = ModelsServices::where('name','LIKE','%'.$request . '%')
        // ->orWhere('email_or_phone','LIKE','%'.$request.'%')
        ->get();

        return view('user.admin.services',compact('services'));
    }
}
