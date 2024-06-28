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
        $validator = Validator::make($request->all(), [            
           
            'name' => 'required|min:3|max:50',
            'email' => 'required|email|unique:admins,'.$id,
            'phone' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|min:10',
            'password' => 'required|confirmed|min:6',
            
            
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }
       
        
        

        return $this->responseRedirectBack('Profile updated successfully.', 'success');
       


    }


}
