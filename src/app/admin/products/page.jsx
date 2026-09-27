import React from 'react';
import {
  Search,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";

function page() {
    const products = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    category: "Vegetables",
    price: "₹60",
    stock: 120,
    status: "Active",
  },
  {
    id: 2,
    name: "Fresh Carrots",
    category: "Vegetables",
    price: "₹80",
    stock: 85,
    status: "Active",
  },
  {
    id: 3,
    name: "Fresh Apples",
    category: "Fruits",
    price: "₹180",
    stock: 45,
    status: "Active",
  },
  {
    id: 4,
    name: "Bananas",
    category: "Fruits",
    price: "₹50",
    stock: 12,
    status: "Low Stock",
  },
  {
    id: 5,
    name: "Fresh Potatoes",
    category: "Vegetables",
    price: "₹45",
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: 6,
    name: "Green Capsicum",
    category: "Vegetables",
    price: "₹90",
    stock: 65,
    status: "Active",
  },
];
  return (
   <>
   
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Products
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Manage your store products
            </p>
          </div>

          {/* Add Product Button */}
          <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-medium transition cursor-pointer">
            <Plus size={19} />
            Add Product
          </button>
        </div>

        {/* Search */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6">
          <div className="relative max-w-md">
            <Search
              size={19}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search products..."
              className="w-full h-11 pl-10 pr-4 border border-gray-200 rounded-lg outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 text-sm"
            />
          </div>
        </div>

        {/* Products */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">

          {/* Top */}
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-gray-900">
                All Products
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                6 products
              </p>
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-left">
                  <th className="px-5 py-4 text-xs font-semibold text-gray-500 uppercase">
                    Product
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold text-gray-500 uppercase">
                    Category
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold text-gray-500 uppercase">
                    Price
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold text-gray-500 uppercase">
                    Stock
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold text-gray-500 uppercase">
                    Status
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold text-gray-500 uppercase text-right">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
                  >
                    {/* Product */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center text-green-600 text-xs">
                          Image
                        </div>

                        <div>
                          <p className="font-medium text-gray-900">
                            {product.name}
                          </p>

                          <p className="text-xs text-gray-400 mt-1">
                            Product #{product.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-5 py-4 text-sm text-gray-600">
                      {product.category}
                    </td>

                    {/* Price */}
                    <td className="px-5 py-4 text-sm font-semibold text-gray-900">
                      {product.price}
                    </td>

                    {/* Stock */}
                    <td className="px-5 py-4 text-sm text-gray-600">
                      {product.stock} units
                    </td>

                    {/* Status */}
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                          product.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : product.status === "Low Stock"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {product.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-2">

                        <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-green-50 hover:text-green-600 transition cursor-pointer">
                          <Pencil size={17} />
                        </button>

                        <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-red-50 hover:text-red-600 transition cursor-pointer">
                          <Trash2 size={17} />
                        </button>

                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile / Tablet Cards */}
          <div className="lg:hidden divide-y divide-gray-100">

            {products.map((product) => (
              <div
                key={product.id}
                className="p-4"
              >
                <div className="flex items-start gap-3">

                  {/* Image */}
                  <div className="w-16 h-16 shrink-0 rounded-lg bg-green-50 flex items-center justify-center text-green-600 text-xs">
                    Image
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">

                    <div className="flex items-start justify-between gap-3">

                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {product.name}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                          {product.category}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-1 shrink-0">

                        <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:text-green-600 cursor-pointer">
                          <Pencil size={15} />
                        </button>

                        <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:text-red-600 cursor-pointer">
                          <Trash2 size={15} />
                        </button>

                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-3">

                      <span className="text-sm font-semibold text-gray-900">
                        {product.price}
                      </span>

                      <span className="text-sm text-gray-500">
                        Stock: {product.stock}
                      </span>

                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          product.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : product.status === "Low Stock"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {product.status}
                      </span>

                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </div>
   
   </>
  );
}

export default page;
