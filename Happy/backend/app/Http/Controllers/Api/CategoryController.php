<?php

namespace App\Http\Controllers\Api;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    /**
     * Get All Categories
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAllCategories()
    {
        $categories = Category::all();
        return response()->json([
            'status' => true,
            'categories' => $categories
        ], 200);
    }

    /**
     * Get Single Category
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function getCategory($id)
    {
        $category = Category::find($id);

        if (!$category) {
            return response()->json([
                'status' => false,
                'message' => 'Category Not Found'
            ], 404);
        }

        return response()->json([
            'status' => true,
            'category' => $category
        ], 200);
    }

    /**
     * Create Category
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function createCategory(Request $request)
    {
        try {
            $validateCategory = Validator::make($request->all(), [
                'name_ru' => 'required',
                'name_kz' => 'required',
                'parent_id' => 'nullable|integer',
                'sort_order' => 'required|integer',
                'show_on_main' => 'required|boolean',
            ]);

            if ($validateCategory->fails()) {
                return response()->json([
                    'status' => false,
                    'message' => 'Validation Error',
                    'errors' => $validateCategory->errors()
                ], 401);
            }

            $category = Category::create([
                'name_ru' => $request->name_ru,
                'name_kz' => $request->name_kz,
                'parent_id' => $request->parent_id,
                'sort_order' => $request->sort_order,
                'show_on_main' => $request->show_on_main,
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Category Created Successfully',
                'category' => $category
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    /**
     * Update Category
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateCategory(Request $request, $id)
    {
        try {
            $validateCategory = Validator::make($request->all(), [
                'name_ru' => 'required',
                'name_kz' => 'required',
                'parent_id' => 'nullable|integer',
                'sort_order' => 'required|integer',
                'show_on_main' => 'required|boolean',
            ]);

            if ($validateCategory->fails()) {
                return response()->json([
                    'status' => false,
                    'message' => 'Validation Error',
                    'errors' => $validateCategory->errors()
                ], 401);
            }

            $category = Category::find($id);

            if (!$category) {
                return response()->json([
                    'status' => false,
                    'message' => 'Category Not Found'
                ], 404);
            }

            $category->update([
                'name_ru' => $request->name_ru,
                'name_kz' => $request->name_kz,
                'parent_id' => $request->parent_id,
                'sort_order' => $request->sort_order,
                'show_on_main' => $request->show_on_main,
            ]);

            return response()->json([
                'status' => true,
                'message' => 'Category Updated Successfully',
                'category' => $category
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    /**
     * Delete Category
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleteCategory($id)
    {
        try {
            $category = Category::find($id);

            if (!$category) {
                return response()->json([
                    'status' => false,
                    'message' => 'Category Not Found'
                ], 404);
            }

            $category->delete();

            return response()->json([
                'status' => true,
                'message' => 'Category Deleted Successfully'
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }
}
