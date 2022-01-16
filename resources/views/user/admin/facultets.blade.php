<a href="{{ route('admin.facultets.create') }}">Create</a>

<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">name</th>
        <th scope="col">image</th>
        <th scope="col">created_at</th>
      </tr>
    </thead>
    <tbody>
        @foreach ($facultets as $facultet)
    <tr>
        <th scope="row">{{ $facultet->id }}</th>
        <td>{{ $facultet->name }}</td>
        <img src="{{ asset('images/'.$facultet->image) }}"></img>
        <td>{{ $facultet->created_at }}</td>

      </tr>
        @endforeach

    </tbody>
  </table>
