<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">name</th>
        <th scope="col">email_or_phone</th>
      </tr>
    </thead>
    <tbody>
        @foreach ($institutions as $institution)
    <tr>
        <th scope="row">1</th>
        <td>{{ $institution->name }}</td>
        <td>{{ $institution->email_or_phone }}</td>
      </tr>
        @endforeach

    </tbody>
  </table>
