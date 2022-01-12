<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">name</th>
        <th scope="col">email</th>
        <th scope="col">message</th>
        <th scope="col">created_at</th>
      </tr>
    </thead>
    <tbody>
        @foreach ($works as $work)
    <tr>
        <th scope="row">{{ $work->id }}</th>
        <td>{{ $work->name }}</td>
        <td>{{ $work->email }}</td>
        <td>{{ $work->message }}</td>
        <td>{{ $work->created_at }}</td>

      </tr>
        @endforeach

    </tbody>
  </table>
