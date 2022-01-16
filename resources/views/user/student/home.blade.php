@extends('welcome')
@section('student')

<div>
    {{-- {{ dd(auth()->user()->image) }} --}}
    <img src="{{asset('images/student/'.auth()->user()->image) }}">
</div>

<form action="{{ route('student.logout') }}" method="POST">
    @csrf
    <button type="submit">logout</button>
</form>




@endsection

