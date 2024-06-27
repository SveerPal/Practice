<?php

namespace App\Http\Controllers\Admin;



use Illuminate\Http\Request;
use App\Models\Admin;
use App\Http\Controllers\BaseController;
use Illuminate\Support\Facades\Auth;

class AdminController extends BaseController
{
    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit()
    {
        $id = Auth::id();
        $this->setPageTitle('Profile', 'Edit Profile');
        return view("admin.admins.edit", ['row' => Admin::find($id)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $id = Auth::id();
        $this->validate($request, [
            'name' => 'required|min:3|max:50',
            'email' => 'required|email|unique:admins',
            'phone' => 'required|digits:10',

            'password' => 'required|confirmed|min:6',
        ]);
        die("ddddd");


    }


}
