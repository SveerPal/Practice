<?php
namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Contracts\ProductCategoryContract;
use App\Http\Controllers\BaseController;

/**
 * Class ProductCategoryController
 * @package App\Http\Controllers\Admin
 */
class ProductCategoryController extends BaseController
{
    /**
     * @var ProductCategoryContract
     */
    protected $ProductCategoryRepository;

    /**
     * ProductCategoryController constructor.
     * @param ProductCategoryContract $ProductCategoryRepository
     */
    public function __construct(ProductCategoryContract $ProductCategoryRepository)
    {
        $this->ProductCategoryRepository = $ProductCategoryRepository;
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
       
        $categories = $this->ProductCategoryRepository->listCategories();
        die("sssss");
        $this->setPageTitle('Categories', 'List of all categories');
        return view('admin.ecommerce.categories.index', compact('categories'));
    }
}