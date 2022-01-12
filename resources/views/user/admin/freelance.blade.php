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
        @foreach ($freelances as $freelance)
            <tr>
                <th scope="row">{{ $freelance->id }}</th>
                <td>{{ $freelance->name }}</td>
                <td>{{ $freelance->email }}</td>
                <td>{{ $freelance->message }}</td>
                <td>{{ $freelance->created_at }}</td>

            </tr>
        @endforeach

    </tbody>
  </table>
