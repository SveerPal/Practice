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
            <div class="row mb-4">
                <div class="col-md-4">
                    <label>First Name</label>
                    <input class="form-control" type="text">
                </div>
                <div class="col-md-4">
                    <label>Last Name</label>
                    <input class="form-control" type="text">
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 mb-4">
                    <label>Email</label>
                    <input class="form-control" type="text">
                </div>
                <div class="clearfix"></div>
                <div class="col-md-8 mb-4">
                    <label>Mobile No</label>
                    <input class="form-control" type="text">
                </div>
                <div class="clearfix"></div>
                <div class="col-md-8 mb-4">
                    <label>Office Phone</label>
                    <input class="form-control" type="text">
                </div>
                <div class="clearfix"></div>
                <div class="col-md-8 mb-4">
                    <label>Home Phone</label>
                    <input class="form-control" type="text">
                </div>
            </div>
            <div class="row mb-10">
                <div class="col-md-12">
                    <button class="btn btn-primary" type="button"><i class="bi bi-check-circle-fill me-2"></i>
                        Save</button>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection