<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">name</th>
        <th scope="col">email_or_phone</th>
      </tr>
    </thead>
    <tbody>
        @foreach ($employers as $employer)
    <tr>
        <th scope="row">1</th>
        <td>{{ $employer->name }}</td>
        <td>{{ $employer->email_or_phone }}</td>
      </tr>
        @endforeach

    </tbody>
  </table>
