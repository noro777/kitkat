
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">


<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>


@auth
{{ auth()->user() }}
@endauth


<body class="hold-transition sidebar-mini layout-fixed">
    <ul class="sidebar-nav">
        <li class="sidebar-header">
            Main
        </li>
        {{--  <li class="sidebar-item active">
            <a data-bs-target="#dashboards" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
                <i class="align-middle me-2 fas fa-fw fa-home"></i> <span class="align-middle">Dashboards</span>
            </a>
            <ul id="dashboards" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar" style="">
                <li class="sidebar-item active"><a class="sidebar-link" href="dashboard-default.html">Default</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="dashboard-analytics.html">Analytics</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="dashboard-e-commerce.html">E-commerce</a></li>
            </ul>
        </li>  --}}


        <li class="sidebar-item active">
            <a data-bs-target="#dashboards" data-bs-toggle="collapse" class="sidebar-link collapsed" >
                <i class="align-middle me-2 fas fa-fw fa-home"></i> <span class="btn btn-primary">users</span>
            </a>
            <ul id="dashboards" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar" style="">
                <li class="sidebar-item active"><a class="btn btn-primary" href="{{ route('admin.student') }}">student</a></li>
                <li class="sidebar-item"><a class="btn btn-primary" href="{{ route('admin.lecturer') }}">lecturer</a></li>
                <li class="sidebar-item"><a class="btn btn-primary" href="{{ route('admin.employer') }}">employer</a></li>
                <li class="sidebar-item"><a class="btn btn-primary" href="{{ route('admin.guest') }}">guest</a></li>
                <li class="sidebar-item"><a class="btn btn-primary" href="{{ route('admin.institution') }}">institution</a></li>
                <li class="sidebar-item"><a class="btn btn-primary" href="{{ route('admin.partner') }}">partner</a></li>
            </ul>


        </li>

        <a class="btn btn-primary" href="{{ route('admin.contact') }}">contact</a>
        <a class="btn btn-primary" href="{{ route('admin.work') }}">work</a>
        <a class="btn btn-primary" href="{{ route('admin.freelance') }}">freelace</a>
        <a class="btn btn-primary" href="{{ route('admin.NewsSuggestion') }}">NewsSuggestions</a>

<form action="{{ route('admin.logout') }}" method="POST">
    @csrf
    <button class="btn btn-primary" type="submit">logout</button>
</form>


        {{--  <li class="sidebar-item">
            <a data-bs-target="#pages" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
                <i class="align-middle me-2 fas fa-fw fa-file"></i> <span class="align-middle">Pages</span>
            </a>
            <ul id="pages" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar" style="">
                <li class="sidebar-item"><a class="sidebar-link" href="pages-settings.html">Settings</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="pages-clients.html">Clients <span class="sidebar-badge badge rounded-pill bg-primary">New</span></a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="pages-invoice.html">Invoice</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="pages-pricing.html">Pricing</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="pages-tasks.html">Tasks</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="pages-chat.html">Chat <span class="sidebar-badge badge rounded-pill bg-primary">New</span></a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="pages-blank.html">Blank Page</a></li>
            </ul>
        </li>
        <li class="sidebar-item">
            <a data-bs-target="#auth" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
                <i class="align-middle me-2 fas fa-fw fa-sign-in-alt"></i> <span class="align-middle">Auth</span>
            </a>
            <ul id="auth" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                <li class="sidebar-item"><a class="sidebar-link" href="pages-sign-in.html">Sign
                        In</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="pages-sign-up.html">Sign
                        Up</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="pages-reset-password.html">Reset Password</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="pages-404.html">404
                        Page</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="pages-500.html">500
                        Page</a></li>
            </ul>
        </li>

        <li class="sidebar-header">
            Elements
        </li>
        <li class="sidebar-item">
            <a data-bs-target="#ui" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
                <i class="align-middle me-2 fas fa-fw fa-flask"></i> <span class="align-middle">User Interface</span>
            </a>
            <ul id="ui" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                <li class="sidebar-item"><a class="sidebar-link" href="ui-alerts.html">Alerts</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="ui-buttons.html">Buttons</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="ui-cards.html">Cards</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="ui-general.html">General</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="ui-grid.html">Grid</a>
                </li>
                <li class="sidebar-item"><a class="sidebar-link" href="ui-modals.html">Modals</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="ui-offcanvas.html">Offcanvas</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="ui-placeholders.html">Placeholders</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="ui-notifications.html">Notifications</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="ui-tabs.html">Tabs</a>
                </li>
                <li class="sidebar-item"><a class="sidebar-link" href="ui-typography.html">Typography</a></li>
            </ul>
        </li>
        <li class="sidebar-item">
            <a data-bs-target="#charts" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
                <i class="align-middle me-2 fas fa-fw fa-chart-pie"></i> <span class="align-middle">Charts</span>
                <span class="sidebar-badge badge rounded-pill bg-primary">New</span>
            </a>
            <ul id="charts" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                <li class="sidebar-item"><a class="sidebar-link" href="charts-chartjs.html">Chart.js</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="charts-apexcharts.html">ApexCharts</a></li>
            </ul>
        </li>

        <li class="sidebar-item">
            <a data-bs-target="#forms" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
                <i class="align-middle me-2 fas fa-fw fa-check-square"></i> <span class="align-middle">Forms</span>
            </a>
            <ul id="forms" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                <li class="sidebar-item"><a class="sidebar-link" href="forms-layouts.html">Layouts</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="forms-basic-elements.html">Basic Elements</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="forms-advanced-elements.html">Advanced Elements</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="forms-floating-labels.html">Floating Labels</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="forms-input-groups.html">Input Groups</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="forms-editors.html">Editors</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="forms-validation.html">Validation</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="forms-wizard.html">Wizard</a></li>
            </ul>
        </li>
        <li class="sidebar-item">
            <a class="sidebar-link" href="tables-bootstrap.html">
                <i class="align-middle me-2 fas fa-fw fa-list"></i> <span class="align-middle">Tables</span>
            </a>
        </li>
        <li class="sidebar-item">
            <a data-bs-target="#datatables" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
                <i class="align-middle me-2 fas fa-fw fa-table"></i> <span class="align-middle">DataTables</span>
            </a>
            <ul id="datatables" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                <li class="sidebar-item"><a class="sidebar-link" href="tables-datatables-responsive.html">Responsive Table</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="tables-datatables-buttons.html">Table with Buttons</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="tables-datatables-column-search.html">Column Search</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="tables-datatables-fixed-header.html">Fixed Header</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="tables-datatables-multi.html">Multi Selection</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="tables-datatables-ajax.html">Ajax Sourced Data</a></li>
            </ul>
        </li>
        <li class="sidebar-item">
            <a data-bs-target="#icons" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
                <i class="align-middle me-2 fas fa-fw fa-heart"></i> <span class="align-middle">Icons</span>
            </a>
            <ul id="icons" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                <li class="sidebar-item"><a class="sidebar-link" href="icons-feather.html">Feather</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="icons-ion.html">Ion
                        Icons</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="icons-font-awesome.html">Font Awesome</a></li>
            </ul>
        </li>
        <li class="sidebar-item">
            <a class="sidebar-link" href="calendar.html">
                <i class="align-middle me-2 far fa-fw fa-calendar-alt"></i> <span class="align-middle">Calendar</span>
            </a>
        </li>
        <li class="sidebar-item">
            <a data-bs-target="#maps" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
                <i class="align-middle me-2 fas fa-fw fa-map-marker-alt"></i> <span class="align-middle">Maps</span>
            </a>
            <ul id="maps" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                <li class="sidebar-item"><a class="sidebar-link" href="maps-google.html">Google Maps</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="maps-vector.html">Vector Maps</a></li>
            </ul>
        </li>

        <li class="sidebar-header">
            Extras
        </li>
        <li class="sidebar-item">
            <a data-bs-target="#documentation" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
                <i class="align-middle me-2 fas fa-fw fa-book"></i> <span class="align-middle">Documentation</span>
            </a>
            <ul id="documentation" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                <li class="sidebar-item"><a class="sidebar-link" href="docs-getting-started.html">Getting Started</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="docs-plugins.html">Plugins</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="docs-changelog.html">Changelog</a></li>
            </ul>
        </li>
        <li class="sidebar-item">
            <a data-bs-target="#layouts" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
                <i class="align-middle me-2 fas fa-fw fa-desktop"></i> <span class="align-middle">Layouts</span>
            </a>
            <ul id="layouts" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                <li class="sidebar-item"><a class="sidebar-link" href="layouts-sidebar-left.html">Left Sidebar</a></li>
                <li class="sidebar-item"><a class="sidebar-link" href="layouts-sidebar-right.html">Right Sidebar</a></li>
            </ul>
        </li>--}}
    </ul>
</body>
