@extends('admin.app')

@section('title') {{ $pageTitle }} @endsection

@section('content')
<div class="app-title">
    <div>
        <h1><i class="bi bi-person"></i> {{ $pageTitle }}</h1>
    </div>
</div>
@include('admin.partials.flash')
<div class="row user">
    <div class="tile">        
        <form action="{{ route('admin.profile.update') }}" method="post" enctype="multipart/form-data">
            <div class="row">
                <div class="col-md-6 mb-4">
                    <label>Name</label>
                    <input class="form-control" type="text" name="name" value="{{ old('name',$row->name) }}">
                </div>
                <div class="col-md-6 mb-4">
                    <label>Phone</label>
                    <input class="form-control" type="text" name="phone" value="{{ old('phone',$row->phone) }}">
                </div>            
                <div class="col-md-6 mb-4">
                    <label>Email</label>
                    <input class="form-control" type="text" name="email" value="{{ old('email',$row->email) }}" readonly disabled>
                </div>                
                <div class="col-md-6 mb-4">
                    <label>Role</label>
                    <select class="form-control" name="role">
                        <option value="">Select</option>
                        <option value="1">Super Admin</option>
                        <option value="2">Admin</option>
                    </select>
                </div>                
                <div class="col-md-6 mb-4">
                    <label>Password</label>
                    <input class="form-control" type="text" name="password">
                </div>                
                <div class="col-md-6 mb-4">
                    <label>Confirm Password</label>
                    <input class="form-control" type="text" name="password_confirmation">
                </div>
            </div>
            <div class="row mb-10">
                <div class="col-md-12">
                    <button class="btn btn-primary" type="submit"><i class="bi bi-check-circle-fill me-2"></i>
                        Update</button>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection