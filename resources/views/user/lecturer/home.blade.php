home
{{ auth()->user() }}

<form action="{{ route('lecturer.logout') }}" method="POST">
    @csrf
    <button type="submit">logout</button>
</form>
