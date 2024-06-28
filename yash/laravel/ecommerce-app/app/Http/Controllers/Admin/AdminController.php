<?php

namespace App\Http\Controllers\Admin;



use Illuminate\Http\Request;
use App\Models\Admin;
use App\Http\Controllers\BaseController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Validator;


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
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Validation\ValidationException
     * 
     */
    public function update(Request $request)
    {
        $id = Auth::id();
        $email = Auth::user()->email;

        $validator = Validator::make($request->all(), [

            'name' => 'required|min:3|max:50',
            'email' => 'required|email:rfc,dns|unique:App\Models\Admin,id,' . $id,
            'phone' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|min:10',
            'password' => 'nullable|required|confirmed|min:8',


        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        
        $admin = Admin::find($id);

        $admin->name = $request->input('name');
        $admin->phone = $request->input('phone');
        $admin->email = $request->input('email');
        $admin->role = $request->input('role');        
        $admin->update();
        if($request->input('password')){
            $admin->password =  Hash::make($request->input('password'));
        }

        return $this->responseRedirectBack('Profile updated successfully.', 'success');



    }


}
