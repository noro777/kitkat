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
        @foreach ($contacts as $contact)
    <tr>
        <th scope="row">{{ $contact->id }}</th>
        <td>{{ $contact->name }}</td>
        <td>{{ $contact->email }}</td>
        <td>{{ $contact->message }}</td>
        <td>{{ $contact->created_at }}</td>

      </tr>
        @endforeach

    </tbody>
  </table>
