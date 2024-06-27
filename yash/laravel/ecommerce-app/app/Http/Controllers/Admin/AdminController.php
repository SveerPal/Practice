<?php

namespace App\Http\Controllers\Admin;



use Illuminate\Http\Request;
use App\Models\Admin;
use App\Http\Controllers\BaseController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

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
     * @return \Illuminate\Http\RedirectResponse
     * 
     */
    public function update(Request $request)
    {
       
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:3|max:50',
            'email' => 'required|email|unique:admins',
            'phone' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|min:10',

            'password' => 'required|confirmed|min:6',
        ]);
        if ($validator->fails()) {
            return redirect('admin/profile')->withErrors($validator)->withInput();
        }
        $id = Auth::id();

        return $this->responseRedirectBack('Profile updated successfully.', 'success');
       


    }


}
