@extends('welcome')
@section('student')

<div>
    <img src="{{asset('images/'.auth()->user()->image) }}">
</div>

<form action="{{ route('student.logout') }}" method="POST">
    @csrf
    <button type="submit">logout</button>
</form>




@endsection

