import React from 'react';
import {
  LockKeyhole,
  ImagePlus,
  Upload,
} from "lucide-react";

function page() {
  return (
    <>
    
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Settings
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Manage your admin account and website settings
          </p>
        </div>

        <div className="space-y-6">

          {/* Change Password */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">

            {/* Section Header */}
            <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-3">

              <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                <LockKeyhole
                  size={20}
                  className="text-green-600"
                />
              </div>

              <div>
                <h2 className="font-semibold text-gray-900">
                  Change Admin Password
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Update your admin account password
                </p>
              </div>

            </div>

            {/* Form */}
            <div className="p-5">

              <div className="max-w-xl space-y-5">

                {/* Current Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Password
                  </label>

                  <input
                    type="password"
                    placeholder="Enter current password"
                    className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 text-sm"
                  />
                </div>

                {/* New Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Password
                  </label>

                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 text-sm"
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm New Password
                  </label>

                  <input
                    type="password"
                    placeholder="Confirm new password"
                    className="w-full h-11 px-4 border border-gray-200 rounded-lg outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 text-sm"
                  />
                </div>

                {/* Button */}
                <div className="pt-1">
                  <button className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition cursor-pointer">
                    Update Password
                  </button>
                </div>

              </div>

            </div>
          </div>


          {/* Homepage Image */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">

            {/* Section Header */}
            <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-3">

              <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                <ImagePlus
                  size={20}
                  className="text-green-600"
                />
              </div>

              <div>
                <h2 className="font-semibold text-gray-900">
                  Home Page Image
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Change the main image displayed on the home page
                </p>
              </div>

            </div>

            {/* Upload Area */}
            <div className="p-5">

              <div className="max-w-2xl">

                {/* Current Image */}
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Home Page Image
                </label>

                <div className="w-full h-52 sm:h-64 rounded-xl bg-green-50 border border-gray-200 flex items-center justify-center mb-5">
                  <div className="text-center">
                    <ImagePlus
                      size={40}
                      className="mx-auto text-green-500 mb-2"
                    />

                    <p className="text-sm text-gray-500">
                      Current Image Preview
                    </p>
                  </div>
                </div>


                {/* Upload */}
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload New Image
                </label>

                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-green-400 transition cursor-pointer">

                  <Upload
                    size={30}
                    className="mx-auto text-gray-400 mb-3"
                  />

                  <p className="text-sm font-medium text-gray-700">
                    Click to upload an image
                  </p>

                  <p className="text-xs text-gray-400 mt-1">
                    PNG, JPG or WEBP up to 5MB
                  </p>

                  <button className="mt-4 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer">
                    Choose Image
                  </button>

                </div>


                {/* Save Button */}
                <div className="flex justify-end mt-5">

                  <button className="flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition cursor-pointer">
                    <Upload size={17} />
                    Update Home Page Image
                  </button>

                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
    
    </>
  );
}

export default page;
