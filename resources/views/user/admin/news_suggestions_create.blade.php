@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Register') }}</div>

                <div class="card-body">

                    @if(Session::get('sucses'))
                    {{ Session::get('sucses') }}

                    @endif
                    <form method="POST" action="{{ route('admin.news_suggestions.store') }}" enctype="multipart/form-data">
                        @csrf

                        <div class="row mb-3">
                            <label for="name" class="col-md-4 col-form-label text-md-end">{{ __('Name') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}"  autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>


                        <label for="image" class="col-md-4 col-form-label text-md-end"> image </label>
                        <input id="image" type="file"  name="image"  >

                        <div class="row mb-3">
                            <label for="content" class="col-md-4 col-form-label text-md-end"> content </label>
                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="content"   >

                                @error('content')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>



                        <div class="row mb-3">
                            <label for="deadline" class="col-md-4 col-form-label text-md-end">deadline</label>

                            <div class="col-md-6">
                                {{--  <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="deadline" value="{{ old('deadline') }}"  autocomplete="deadline" autofocus>  --}}

                                <input type="datetime-local" id="start" name="deadline"  >

                                @error('deadline')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="type" class="col-md-4 col-form-label text-md-end">type</label>

                            <div class="col-md-6">
                                {{--  <input id="type" type="text" class="form-control @error('type') is-invalid @enderror" name="type" value="{{ old('type') }}"  autocomplete="type" autofocus>  --}}

                                <select name = "type" class="form-control @error('type') is-invalid @enderror">
                                    <option value = "news" selected>Նորություններ</option>
                                    <option value = "arajarkner">Առաջարկներ</option>
                                 </select>

                                @error('type')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
