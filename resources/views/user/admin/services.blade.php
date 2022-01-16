<a href="{{ route('admin.services.create') }}">Create</a>

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
        @foreach ($services as $service)
    <tr>
        <th scope="row">{{ $service->id }}</th>
        <td>{{ $service->name }}</td>
        <img src="{{ asset('images/'.$service->image) }}"></img>
        <td>{{ $service->content }}</td>
        <td>{{ $service->created_at }}</td>

      </tr>
        @endforeach

    </tbody>
  </table>
