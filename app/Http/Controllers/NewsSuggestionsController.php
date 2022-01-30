<?php

namespace App\Http\Controllers;

use App\Models\NewsSuggestions;
use Illuminate\Http\Request;

class NewsSuggestionsController extends Controller
{

    public function create(Request $request)
    {
        // dd($request->all());
        $data = $request->validate([
            'name'=>'required',
            'image'=>'required',
            'content'=>'required',
            'deadline'=>'required',
            'type'=>'required'
        ]);
        if($request->hasFile('image')){
            $image      = $request->file('image');
            $fileName   = time() . '.' . $image->getClientOriginalExtension();
            $image->move('images/news_suggestion',$fileName);
            $data['image']  = $fileName;

            NewsSuggestions::create($data);
        }else{
            NewsSuggestions::create($data);
        }
        return redirect()->route('admin.NewsSuggestion');
    }

    public function search(Request $req)
    {
        // dd($req->all());
        $request = $req->all()['search'];
        $NewsSuggestions = NewsSuggestions::where('name','LIKE','%'.$request . '%')
        ->orWhere('content','LIKE','%'.$request.'%')
        ->get();

        return view('user.admin.news_suggestions',compact('NewsSuggestions'));
    }

}
