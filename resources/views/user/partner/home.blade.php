home
{{ auth()->user() }}

<form action="{{ route('partner.logout') }}" method="POST">
    @csrf
    <button type="submit">logout</button>
</form>
