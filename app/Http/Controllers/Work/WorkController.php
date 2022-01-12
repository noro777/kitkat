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
}
