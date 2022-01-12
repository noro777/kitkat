<a href="{{ route('admin.NewsSuggestionCreate') }}">Create</a>

<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">name</th>
        <th scope="col">image</th>
        <th scope="col">content</th>
        <th scope="col">created_at</th>
      </tr>
    </thead>
    <tbody>
        @foreach ($NewsSuggestions as $NewsSuggestion)
    <tr>
        <th scope="row">{{ $NewsSuggestion->id }}</th>
        <td>{{ $NewsSuggestion->name }}</td>
        <img src="{{ asset('images/'.$NewsSuggestion->image) }}"></img>
        <td>{{ $NewsSuggestion->content }}</td>
        <td>{{ $NewsSuggestion->created_at }}</td>

      </tr>
        @endforeach

    </tbody>
  </table>
