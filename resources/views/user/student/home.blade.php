@extends('welcome')
@section('student')



<form action="{{ route('student.logout') }}" method="POST">
    @csrf
    <button type="submit">logout</button>
</form>


@endsection

