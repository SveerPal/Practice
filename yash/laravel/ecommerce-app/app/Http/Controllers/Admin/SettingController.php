<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use UploadAble;

class SettingController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $this->setPageTitle('Settings', 'Manage Settings');
        return view('admin.settings.index');
    }
    /**
     * @param Request $request
     */
    public function update(Request $request)
    {

    }
}
