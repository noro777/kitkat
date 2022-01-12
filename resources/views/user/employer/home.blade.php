home
{{ auth()->user() }}

<form action="{{ route('employer.logout') }}" method="POST">
    @csrf
    <button type="submit">logout</button>
</form>
