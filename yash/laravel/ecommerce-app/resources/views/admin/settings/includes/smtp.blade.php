<div class="tile">
    <form action="{{ route('admin.settings.update') }}" method="POST" role="form">
        @csrf
        <h3 class="tile-title">SMTP Settings</h3>
        <hr>
        <div class="tile-body">
            <div class="mb-3">
                <label class="form-label" for="smtp_host">Host</label>
                <input class="form-control" type="text" placeholder="Enter Host" id="smtp_host" name="smtp_host"
                    value="{{ config('settings.smtp_host') }}" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="smtp_user_name">User Name</label>
                <input class="form-control" type="text" placeholder="Enter user name" id="smtp_user_name" name="smtp_user_name"
                    value="{{ config('settings.smtp_user_name') }}" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="smtp_password">Password</label>
                <input class="form-control" type="password" placeholder="Enter Password" id="smtp_password" name="smtp_password"
                    value="{{ config('settings.smtp_password') }}" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="smtp_from_email">From Email</label>
                <input class="form-control" type="email" placeholder="Enter From Email" id="smtp_from_email" name="smtp_from_email"
                    value="{{ config('settings.smtp_from_email') }}" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="smtp_from_name">From Name</label>
                <input class="form-control" type="text" placeholder="Enter From Name" id="smtp_from_name" name="smtp_from_name"
                    value="{{ config('settings.smtp_from_name') }}" />
            </div>
            <div class="mb-3">
                <label class="form-label" for="smtp_type">Type</label>
                <select class="form-control"  id="smtp_type" name="smtp_type">
                    <option  value="">Select</option>
                    <option @if (old('type',config('settings.smtp_type'))=='ssl') {{ 'selected' }}@endif value="ssl">SSL (Port 465)</option>
                    <option @if (old('type',config('settings.smtp_type'))=='tls'){{ 'selected' }}@endif value="tls">TLS (Port 520))</option>                    
                </select>    
            </div>
            <div class="mb-3">
                <label class="form-label" for="smtp_port">Port</label>
                <input class="form-control" type="text" placeholder="Enter Port" id="smtp_port" name="smtp_port"
                    value="{{ config('settings.smtp_port') }}" />
            </div>            
        </div>
        <div class="tile-footer">
            <div class="row d-print-none mt-2">
                <div class="col-12 text-right">
                    <button class="btn btn-success" type="submit"><i class="fa fa-fw fa-lg fa-check-circle"></i>Update
                        Settings</button>
                </div>
            </div>
        </div>
    </form>
</div>