<a href="{{ route('admin.work.create') }}">Create</a>

<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">description</th>
        <th scope="col">address</th>
        <th scope="col">created_at</th>
      </tr>
    </thead>
    <tbody>
        @foreach ($works as $work)
    <tr>
        <th scope="row">{{ $work->id }}</th>
        <td>{{ $work->description }}</td>
        <td>{{ $work->address }}</td>
        <td>{{ $work->created_at }}</td>

      </tr>
        @endforeach

    </tbody>
  </table>
