export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-5">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm sm:p-10">

        {/* Logo */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-700">
            VegStore
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Login to continue
          </p>
        </div>


        {/* Phone Number */}
        <div className="mt-8">

          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>

          <div className="flex overflow-hidden rounded-lg border border-gray-300 focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600">

            <span className="flex items-center border-r bg-gray-50 px-4 text-sm text-gray-600">
              +91
            </span>

            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 text-sm outline-none"
            />

          </div>

        </div>


        {/* Continue Button */}
        <button className="mt-6 w-full rounded-lg bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800">
          Continue
        </button>


        {/* Bottom Text */}
        <p className="mt-6 text-center text-xs text-gray-400">
          By continuing, you agree to our Terms & Privacy Policy.
        </p>

      </div>

    </main>
  );
}