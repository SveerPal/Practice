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
        <form>
            <div class="row">
                <div class="col-md-6 mb-4">
                    <label>Name</label>
                    <input class="form-control" type="text">
                </div>
                <div class="col-md-6 mb-4">
                    <label>Phone</label>
                    <input class="form-control" type="text">
                </div>            
                <div class="col-md-6 mb-4">
                    <label>Email</label>
                    <input class="form-control" type="text">
                </div>                
                <div class="col-md-6 mb-4">
                    <label>Role</label>
                    <input class="form-control" type="text">
                </div>                
                <div class="col-md-6 mb-4">
                    <label>Password</label>
                    <input class="form-control" type="text">
                </div>                
                <div class="col-md-6 mb-4">
                    <label>Confirm Password</label>
                    <input class="form-control" type="text">
                </div>
            </div>
            <div class="row mb-10">
                <div class="col-md-12">
                    <button class="btn btn-primary" type="button"><i class="bi bi-check-circle-fill me-2"></i>
                        Update</button>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection