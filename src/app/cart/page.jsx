export default function CartPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div>
            <h1 className="text-2xl font-bold text-green-800">
              VeggieMart
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Your Shopping Cart
            </p>
          </div>

          <button className="text-sm text-gray-600 hover:text-green-700">
            ← Continue Shopping
          </button>

        </div>
      </header>


      {/* Cart */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Cart Items */}
          <div className="lg:col-span-2">

            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">

              {/* Cart Header */}
              <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">

                <div>
                  <h2 className="text-xl font-semibold">
                    Shopping Cart
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    3 items in your cart
                  </p>
                </div>

                <button className="text-sm text-red-500 hover:text-red-600">
                  Clear Cart
                </button>

              </div>


              {/* Product 1 */}
              <div className="p-6 border-b border-gray-100">

                <div className="flex gap-5">

                  {/* Image Placeholder */}
                  <div className="w-28 h-28 rounded-xl bg-gray-100 shrink-0 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">
                      Image
                    </span>
                  </div>


                  <div className="flex-1">

                    <div className="flex justify-between gap-4">

                      <div>
                        <span className="text-xs text-green-700 bg-green-50 px-2 py-1 rounded-full">
                          Fresh
                        </span>

                        <h3 className="font-semibold text-gray-900 mt-3">
                          Product Name
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                          1 Kg
                        </p>
                      </div>

                      <button className="text-gray-400 hover:text-red-500">
                        ✕
                      </button>

                    </div>


                    <div className="flex justify-between items-center mt-5">

                      <p className="text-lg font-bold text-green-700">
                        ₹00
                      </p>


                      {/* Quantity */}
                      <div className="flex items-center border border-gray-200 rounded-lg">

                        <button className="w-9 h-9 text-gray-600 hover:bg-gray-50">
                          −
                        </button>

                        <span className="w-9 text-center text-sm">
                          1
                        </span>

                        <button className="w-9 h-9 text-gray-600 hover:bg-gray-50">
                          +
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              </div>


              {/* Product 2 */}
              <div className="p-6 border-b border-gray-100">

                <div className="flex gap-5">

                  <div className="w-28 h-28 rounded-xl bg-gray-100 shrink-0 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">
                      Image
                    </span>
                  </div>


                  <div className="flex-1">

                    <div className="flex justify-between gap-4">

                      <div>
                        <span className="text-xs text-green-700 bg-green-50 px-2 py-1 rounded-full">
                          Organic
                        </span>

                        <h3 className="font-semibold text-gray-900 mt-3">
                          Product Name
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                          500 g
                        </p>
                      </div>

                      <button className="text-gray-400 hover:text-red-500">
                        ✕
                      </button>

                    </div>


                    <div className="flex justify-between items-center mt-5">

                      <p className="text-lg font-bold text-green-700">
                        ₹00
                      </p>


                      <div className="flex items-center border border-gray-200 rounded-lg">

                        <button className="w-9 h-9 text-gray-600 hover:bg-gray-50">
                          −
                        </button>

                        <span className="w-9 text-center text-sm">
                          1
                        </span>

                        <button className="w-9 h-9 text-gray-600 hover:bg-gray-50">
                          +
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              </div>


              {/* Product 3 */}
              <div className="p-6">

                <div className="flex gap-5">

                  <div className="w-28 h-28 rounded-xl bg-gray-100 shrink-0 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">
                      Image
                    </span>
                  </div>


                  <div className="flex-1">

                    <div className="flex justify-between gap-4">

                      <div>
                        <span className="text-xs text-green-700 bg-green-50 px-2 py-1 rounded-full">
                          Fresh
                        </span>

                        <h3 className="font-semibold text-gray-900 mt-3">
                          Product Name
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                          1 Kg
                        </p>
                      </div>

                      <button className="text-gray-400 hover:text-red-500">
                        ✕
                      </button>

                    </div>


                    <div className="flex justify-between items-center mt-5">

                      <p className="text-lg font-bold text-green-700">
                        ₹00
                      </p>


                      <div className="flex items-center border border-gray-200 rounded-lg">

                        <button className="w-9 h-9 text-gray-600 hover:bg-gray-50">
                          −
                        </button>

                        <span className="w-9 text-center text-sm">
                          1
                        </span>

                        <button className="w-9 h-9 text-gray-600 hover:bg-gray-50">
                          +
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* Order Summary */}
          <div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-6">

              <h2 className="text-xl font-semibold">
                Order Summary
              </h2>


              {/* Coupon */}
              <div className="mt-6">

                <label className="text-sm font-medium text-gray-700">
                  Have a coupon?
                </label>

                <div className="flex mt-2">

                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="flex-1 border border-gray-200 rounded-l-lg px-3 py-3 text-sm outline-none focus:border-green-600"
                  />

                  <button className="bg-green-700 text-white px-4 rounded-r-lg text-sm font-medium">
                    Apply
                  </button>

                </div>

              </div>


              {/* Price */}
              <div className="border-t border-gray-100 mt-6 pt-6 space-y-4">

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Subtotal
                  </span>

                  <span className="font-medium">
                    ₹00
                  </span>
                </div>


                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Delivery
                  </span>

                  <span className="text-green-600">
                    Free
                  </span>
                </div>


                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Discount
                  </span>

                  <span className="text-red-500">
                    − ₹00
                  </span>
                </div>

              </div>


              {/* Total */}
              <div className="border-t border-gray-100 mt-6 pt-5 flex justify-between items-center">

                <span className="text-lg font-semibold">
                  Total
                </span>

                <span className="text-2xl font-bold text-green-700">
                  ₹00
                </span>

              </div>


              {/* Checkout */}
              <button className="w-full bg-green-700 hover:bg-green-800 text-white py-3.5 rounded-xl font-semibold mt-6">
                Proceed to Checkout →
              </button>


              {/* Payment */}
              <div className="mt-5 text-center">

                <p className="text-xs text-gray-400">
                  Secure checkout
                </p>

                <div className="flex justify-center gap-3 mt-3">

                  <span className="px-3 py-1.5 bg-gray-50 rounded text-xs text-gray-500">
                    UPI
                  </span>

                  <span className="px-3 py-1.5 bg-gray-50 rounded text-xs text-gray-500">
                    VISA
                  </span>

                  <span className="px-3 py-1.5 bg-gray-50 rounded text-xs text-gray-500">
                    Mastercard
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}