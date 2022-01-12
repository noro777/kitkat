<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">name</th>
        <th scope="col">email_or_phone</th>
      </tr>
    </thead>
    <tbody>
        @foreach ($students as $student)
    <tr>
        <th scope="row">1</th>
        <td>{{ $student->name }}</td>
        <td>{{ $student->email_or_phone }}</td>
        <img src="{{ asset('images/'.$student->image) }}"></img>
      </tr>
      {{--  {{ dd($student->image) }}  --}}

        @endforeach

    </tbody>
  </table>

