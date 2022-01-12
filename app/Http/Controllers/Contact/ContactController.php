<?php

namespace App\Http\Controllers\Contact;

use App\Http\Controllers\Controller;
use App\Models\Contact\Contact;
use Illuminate\Http\Request;
use PhpParser\Node\Expr\AssignOp\Concat;

class ContactController extends Controller
{
    public function index(Request $req)
    {
        $data = $req->validate([
            'name'=>'required',
            'email'=>'required|email',
            'message'=>'required'
        ]);

        Contact::create($data);


        return $data['name'];
    }
}
