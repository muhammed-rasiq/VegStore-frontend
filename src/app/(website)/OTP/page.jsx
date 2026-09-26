import React from 'react';

function page() {
  return (
    <>
    
    
     <main className="flex min-h-screen items-center justify-center bg-gray-50 px-5">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm sm:p-10">

        {/* Logo */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-700">
            VegStore
          </h1>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            Verify your number
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Enter the 6-digit OTP sent to
          </p>

          <p className="mt-1 font-medium text-gray-800">
            +91 98765 43210
          </p>
        </div>


        {/* OTP Inputs */}
        <div className="mt-8 flex justify-center gap-2 sm:gap-3">

          <input
            type="text"
            maxLength="1"
            className="h-12 w-11 rounded-lg border border-gray-300 text-center text-xl font-semibold outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 sm:h-14 sm:w-12"
          />

          <input
            type="text"
            maxLength="1"
            className="h-12 w-11 rounded-lg border border-gray-300 text-center text-xl font-semibold outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 sm:h-14 sm:w-12"
          />

          <input
            type="text"
            maxLength="1"
            className="h-12 w-11 rounded-lg border border-gray-300 text-center text-xl font-semibold outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 sm:h-14 sm:w-12"
          />

          <input
            type="text"
            maxLength="1"
            className="h-12 w-11 rounded-lg border border-gray-300 text-center text-xl font-semibold outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 sm:h-14 sm:w-12"
          />

          <input
            type="text"
            maxLength="1"
            className="h-12 w-11 rounded-lg border border-gray-300 text-center text-xl font-semibold outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 sm:h-14 sm:w-12"
          />

          <input
            type="text"
            maxLength="1"
            className="h-12 w-11 rounded-lg border border-gray-300 text-center text-xl font-semibold outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 sm:h-14 sm:w-12"
          />

        </div>


        {/* Verify Button */}
        <button className="mt-7 w-full rounded-lg bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800">
          Verify OTP
        </button>


        {/* Resend */}
        <div className="mt-6 text-center">

          <p className="text-sm text-gray-500">
            Didn't receive the code?
          </p>

          <button className="mt-2 text-sm font-semibold text-green-600 hover:text-green-700">
            Resend OTP
          </button>

        </div>


        {/* Change Number */}
        <button className="mt-5 w-full text-sm text-gray-400 hover:text-gray-600">
          Change phone number
        </button>

      </div>

    </main>
    
    
    </>
  );
}

export default page;
