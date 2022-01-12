<a href="{{ route('admin.freelance.create') }}">Create</a>

<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">field</th>
        <th scope="col">description</th>
        <th scope="col">created_at</th>
      </tr>
    </thead>
    <tbody>
        @foreach ($freelances as $freelance)
            <tr>
                <th scope="row">{{ $freelance->id }}</th>
                <td>{{ $freelance->field }}</td>
                <td>{{ $freelance->description }}</td>
                <td>{{ $freelance->created_at }}</td>

            </tr>
        @endforeach

    </tbody>
  </table>
