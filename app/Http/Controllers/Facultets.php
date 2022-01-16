<?php

namespace App\Http\Controllers;

use App\Models\Facultets as ModelsFacultets;
use Illuminate\Http\Request;

class Facultets extends Controller
{
    public function create(Request $request)
    {
        // dd($request);
        $data = $request->validate([
            'name'=>'required',
            'image'=>'required',
            'type'=>'required'
        ]);
        if($request->hasFile('image')){
            $image      = $request->file('image');
            $fileName   = time() . '.' . $image->getClientOriginalExtension();
            $image->move('images',$fileName);
            $data['image']  = $fileName;

            ModelsFacultets::create($data);
        }else{
            ModelsFacultets::create($data);
        }
        return redirect()->route('admin.facultets',);
    }
}
