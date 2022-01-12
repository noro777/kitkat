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
        ]);

        Freelance::create($data);
        return redirect()->route('admin.freelance');

    }
}
