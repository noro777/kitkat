<?php

namespace App\Http\Controllers;

use App\Models\NewsSuggestions;
use Illuminate\Http\Request;

class NewsSuggestionsController extends Controller
{

    public function create(Request $request)
    {
        // dd($request);
        $data = $request->validate([
            'name'=>'required',
            'image'=>'required',
            'content'=>'required',
        ]);
        if($request->hasFile('image')){
            $image      = $request->file('image');
            $fileName   = time() . '.' . $image->getClientOriginalExtension();
            $image->move('images',$fileName);
            $data['image']  = $fileName;

            NewsSuggestions::create($data);
        }else{
            NewsSuggestions::create($data);
        }
        return redirect()->route('admin.NewsSuggestion');
    }

}
