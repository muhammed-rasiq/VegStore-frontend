import React from 'react';
import {
  Search,
  Plus,
  Pencil,
  Trash2,
  Eye,
  Tag,
  CalendarDays,
} from "lucide-react";

function page() {
    const offers = [
  {
    id: 1,
    title: "Fresh Vegetables",
    description: "Get up to 30% off on fresh vegetables",
    code: "VEG30",
    discount: "30% OFF",
    validUntil: "30 Sep 2026",
    status: "Active",
  },
  {
    id: 2,
    title: "Fresh Fruits",
    description: "Save 25% on selected fresh fruits",
    code: "FRUIT25",
    discount: "25% OFF",
    validUntil: "05 Oct 2026",
    status: "Active",
  },
  {
    id: 3,
    title: "First Order Offer",
    description: "Get ₹100 off on your first order",
    code: "WELCOME100",
    discount: "₹100 OFF",
    validUntil: "15 Oct 2026",
    status: "Active",
  },
  {
    id: 4,
    title: "Weekend Special",
    description: "Special discount for weekend orders",
    code: "WEEKEND20",
    discount: "20% OFF",
    validUntil: "29 Sep 2026",
    status: "Scheduled",
  },
  {
    id: 5,
    title: "Summer Sale",
    description: "Special summer season discount",
    code: "SUMMER15",
    discount: "15% OFF",
    validUntil: "20 Aug 2026",
    status: "Expired",
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
              Offers
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Create and manage your store offers
            </p>
          </div>

          {/* Add Offer */}
          <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-medium transition cursor-pointer">
            <Plus size={19} />
            Add Offer
          </button>

        </div>

        {/* Add Offer Section */}
        <div className="bg-white border border-gray-200 rounded-xl mb-6">

          <div className="px-5 py-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <Tag size={19} className="text-green-600" />

              <div>
                <h2 className="font-semibold text-gray-900">
                  Add New Offer
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Create a discount offer for your customers
                </p>
              </div>
            </div>
          </div>

          <div className="p-5">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Offer Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Offer Title
                </label>

                <input
                  type="text"
                  placeholder="e.g. Fresh Vegetables Sale"
                  className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 text-sm"
                />
              </div>

              {/* Offer Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Offer Code
                </label>

                <input
                  type="text"
                  placeholder="e.g. VEG30"
                  className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 text-sm"
                />
              </div>

              {/* Discount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Discount
                </label>

                <div className="flex gap-2">

                  <input
                    type="number"
                    placeholder="30"
                    className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 text-sm"
                  />

                  <select className="h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-green-500 bg-white text-sm">
                    <option>Percentage</option>
                    <option>Fixed Amount</option>
                  </select>

                </div>
              </div>

              {/* Minimum Order */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Order
                </label>

                <input
                  type="number"
                  placeholder="e.g. ₹500"
                  className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 text-sm"
                />
              </div>

              {/* Start Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date
                </label>

                <div className="relative">
                  <CalendarDays
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="date"
                    className="w-full h-11 pl-10 pr-4 border border-gray-200 rounded-lg outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 text-sm"
                  />
                </div>
              </div>

              {/* End Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Date
                </label>

                <div className="relative">
                  <CalendarDays
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="date"
                    className="w-full h-11 pl-10 pr-4 border border-gray-200 rounded-lg outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 text-sm"
                  />
                </div>
              </div>

            </div>

            {/* Description */}
            <div className="mt-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Offer Description
              </label>

              <textarea
                rows="3"
                placeholder="Write a short description about this offer..."
                className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none resize-none focus:border-green-500 focus:ring-2 focus:ring-green-100 text-sm"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-5">

              <button className="px-5 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer">
                Cancel
              </button>

              <button className="flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium cursor-pointer">
                <Plus size={17} />
                Add Offer
              </button>

            </div>

          </div>
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
              placeholder="Search offers..."
              className="w-full h-11 pl-10 pr-4 border border-gray-200 rounded-lg outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 text-sm"
            />

          </div>

        </div>

        {/* Existing Offers */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">

          {/* Top */}
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">

            <div>
              <h2 className="font-semibold text-gray-900">
                All Offers
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                5 offers
              </p>
            </div>

          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">

            <table className="w-full">

              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-left">

                  <th className="px-5 py-4 text-xs font-semibold text-gray-500 uppercase">
                    Offer
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold text-gray-500 uppercase">
                    Code
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold text-gray-500 uppercase">
                    Discount
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold text-gray-500 uppercase">
                    Valid Until
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

                {offers.map((offer) => (
                  <tr
                    key={offer.id}
                    className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
                  >

                    {/* Offer */}
                    <td className="px-5 py-4">

                      <div className="flex items-center gap-3">

                        <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
                          <Tag
                            size={20}
                            className="text-green-600"
                          />
                        </div>

                        <div>

                          <p className="font-medium text-gray-900">
                            {offer.title}
                          </p>

                          <p className="text-xs text-gray-400 mt-1">
                            {offer.description}
                          </p>

                        </div>

                      </div>

                    </td>

                    {/* Code */}
                    <td className="px-5 py-4">

                      <span className="px-2.5 py-1 bg-gray-100 rounded-md text-sm font-medium text-gray-700">
                        {offer.code}
                      </span>

                    </td>

                    {/* Discount */}
                    <td className="px-5 py-4 text-sm font-semibold text-green-600">
                      {offer.discount}
                    </td>

                    {/* Date */}
                    <td className="px-5 py-4 text-sm text-gray-600">
                      {offer.validUntil}
                    </td>

                    {/* Status */}
                    <td className="px-5 py-4">

                      <span
                        className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                          offer.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : offer.status === "Scheduled"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {offer.status}
                      </span>

                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4">

                      <div className="flex items-center justify-end gap-2">

                        {/* View */}
                        <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-green-600 transition cursor-pointer">
                          <Eye size={17} />
                        </button>

                        {/* Edit */}
                        <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-green-50 hover:text-green-600 transition cursor-pointer">
                          <Pencil size={17} />
                        </button>

                        {/* Delete */}
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

          {/* Mobile Cards */}
          <div className="lg:hidden divide-y divide-gray-100">

            {offers.map((offer) => (
              <div
                key={offer.id}
                className="p-4"
              >

                <div className="flex gap-3">

                  {/* Icon */}
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-green-50 flex items-center justify-center">
                    <Tag
                      size={20}
                      className="text-green-600"
                    />
                  </div>

                  <div className="flex-1 min-w-0">

                    <div className="flex items-start justify-between gap-3">

                      <div>

                        <h3 className="font-semibold text-gray-900">
                          {offer.title}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                          {offer.description}
                        </p>

                      </div>

                      {/* Actions */}
                      <div className="flex gap-1 shrink-0">

                        <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:text-green-600 cursor-pointer">
                          <Eye size={15} />
                        </button>

                        <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:text-green-600 cursor-pointer">
                          <Pencil size={15} />
                        </button>

                        <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:text-red-600 cursor-pointer">
                          <Trash2 size={15} />
                        </button>

                      </div>

                    </div>

                    <div className="flex flex-wrap items-center gap-3 mt-3">

                      <span className="px-2.5 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-700">
                        {offer.code}
                      </span>

                      <span className="text-sm font-semibold text-green-600">
                        {offer.discount}
                      </span>

                      <span className="text-sm text-gray-500">
                        Until {offer.validUntil}
                      </span>

                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          offer.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : offer.status === "Scheduled"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {offer.status}
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
