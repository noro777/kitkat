home
{{ auth()->user() }}

<form action="{{ route('guest.logout') }}" method="POST">
    @csrf
    <button type="submit">logout</button>
</form>
