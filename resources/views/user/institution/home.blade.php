home
{{ auth()->user() }}

<form action="{{ route('institution.logout') }}" method="POST">
    @csrf
    <button type="submit">logout</button>
</form>
