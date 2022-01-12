<?php

namespace App\Http\Controllers;

use App\Mail\Mail as MailMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public static function sendEmail($name,$email,$code)
    {
        $data = [
            'name'=>$name,
            'code'=>$code
        ];

        Mail::to($email)->send(new MailMail($data));
    }
}
