export default function ProductDetailsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-green-800">
            VeggieMart
          </h1>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <span className="text-gray-500">Home</span>
            <span className="text-gray-500">Products</span>
            <span className="text-green-700">Vegetables</span>
            <span className="text-gray-500">Offers</span>
          </div>

          <div className="flex items-center gap-5">
            <button className="text-xl">
              ♡
            </button>

            <button className="relative text-xl">
              🛒

              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-green-600 text-white text-[10px] flex items-center justify-center">
                0
              </span>
            </button>
          </div>

        </div>
      </nav>


      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-7">

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Home</span>
          <span>/</span>
          <span>Products</span>
          <span>/</span>
          <span className="text-gray-900">
            Product Name
          </span>
        </div>

      </div>


      {/* Product Details */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-2 gap-12">


          {/* Product Image */}
          <div>

            <div className="relative bg-gray-50 rounded-3xl h-[500px] flex items-center justify-center">

              <span className="text-gray-400">
                Product Image
              </span>


              {/* Badge */}
              <span className="absolute top-6 left-6 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Fresh
              </span>


              {/* Wishlist */}
              <button className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white shadow-sm flex items-center justify-center text-xl text-gray-500 hover:text-red-500">
                ♡
              </button>

            </div>


            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4 mt-4">

              <div className="h-24 rounded-xl bg-gray-100 border-2 border-green-600 flex items-center justify-center">
                <span className="text-xs text-gray-400">
                  Image
                </span>
              </div>

              <div className="h-24 rounded-xl bg-gray-100 flex items-center justify-center">
                <span className="text-xs text-gray-400">
                  Image
                </span>
              </div>

              <div className="h-24 rounded-xl bg-gray-100 flex items-center justify-center">
                <span className="text-xs text-gray-400">
                  Image
                </span>
              </div>

              <div className="h-24 rounded-xl bg-gray-100 flex items-center justify-center">
                <span className="text-xs text-gray-400">
                  Image
                </span>
              </div>

            </div>

          </div>


          {/* Product Information */}
          <div className="flex flex-col justify-center">

            {/* Category */}
            <p className="text-green-600 font-medium text-sm">
              Fresh Vegetables
            </p>


            {/* Title */}
            <h2 className="text-4xl font-bold text-gray-900 mt-3">
              Product Name
            </h2>


            {/* Rating */}
            <div className="flex items-center gap-3 mt-5">

              <div className="flex gap-1 text-yellow-500">
                ★★★★★
              </div>

              <span className="text-sm text-gray-500">
                4.8
              </span>

              <span className="text-sm text-gray-400">
                (124 Reviews)
              </span>

            </div>


            {/* Price */}
            <div className="flex items-center gap-4 mt-7">

              <span className="text-3xl font-bold text-green-700">
                ₹00
              </span>

              <span className="text-lg text-gray-400 line-through">
                ₹00
              </span>

              <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                20% OFF
              </span>

            </div>


            {/* Description */}
            <p className="text-gray-600 leading-relaxed mt-6">
              Fresh and high-quality vegetables carefully selected
              from trusted farms. Perfect for everyday cooking and
              healthy meals.
            </p>


            {/* Product Info */}
            <div className="grid grid-cols-2 gap-4 mt-7">

              <div className="border border-gray-100 rounded-xl p-4">
                <p className="text-xs text-gray-400">
                  Weight
                </p>

                <p className="font-semibold mt-1">
                  1 Kg
                </p>
              </div>


              <div className="border border-gray-100 rounded-xl p-4">
                <p className="text-xs text-gray-400">
                  Availability
                </p>

                <p className="font-semibold text-green-600 mt-1">
                  In Stock
                </p>
              </div>

            </div>


            {/* Quantity + Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              {/* Quantity */}
              <div className="flex items-center border border-gray-200 rounded-xl">

                <button className="w-12 h-12 text-lg text-gray-600 hover:bg-gray-50">
                  −
                </button>

                <span className="w-12 text-center font-medium">
                  1
                </span>

                <button className="w-12 h-12 text-lg text-gray-600 hover:bg-gray-50">
                  +
                </button>

              </div>


              {/* Add Cart */}
              <button className="flex-1 bg-green-700 hover:bg-green-800 text-white rounded-xl font-semibold px-8 py-3 transition">
                Add to Cart
              </button>


              {/* Buy Now */}
              <button className="flex-1 border-2 border-green-700 text-green-700 hover:bg-green-50 rounded-xl font-semibold px-8 py-3 transition">
                Buy Now
              </button>

            </div>


            {/* Delivery Info */}
            <div className="border-t border-gray-100 mt-8 pt-7 space-y-5">

              <div className="flex gap-4">

                <div className="w-11 h-11 rounded-full bg-green-50 flex items-center justify-center text-green-700">
                  ✓
                </div>

                <div>
                  <h4 className="font-semibold">
                    Fresh & Quality Guaranteed
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Carefully selected fresh produce.
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

                <div className="w-11 h-11 rounded-full bg-green-50 flex items-center justify-center text-green-700">
                  🚚
                </div>

                <div>
                  <h4 className="font-semibold">
                    Fast Delivery
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Delivered fresh to your doorstep.
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

                <div className="w-11 h-11 rounded-full bg-green-50 flex items-center justify-center text-green-700">
                  🔒
                </div>

                <div>
                  <h4 className="font-semibold">
                    Secure Payment
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Safe and secure checkout.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


     

      {/* Footer */}
      <footer className="bg-gray-950 text-white">

        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-4">

          <h2 className="text-xl font-bold text-green-500">
            VeggieMart
          </h2>

          <p className="text-gray-500 text-sm">
            Fresh vegetables delivered to your doorstep.
          </p>

        </div>

      </footer>

    </main>
  );
}


/* Detail Component */

// function Detail({ title, value }) {
//   return (
//     <div className="bg-white rounded-xl border border-gray-100 p-5">

//       <p className="text-sm text-gray-400">
//         {title}
//       </p>

//       <p className="font-semibold mt-2">
//         {value}
//       </p>

//     </div>
//   );
// }


/* Related Product */

// function RelatedProduct() {
//   return (
//     <div className="bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-lg transition">

//       <div className="h-44 bg-gray-100 rounded-xl flex items-center justify-center">
//         <span className="text-sm text-gray-400">
//           Product Image
//         </span>
//       </div>

//       <h3 className="font-semibold mt-4">
//         Product Name
//       </h3>

//       <p className="text-sm text-gray-500 mt-1">
//         1 Kg
//       </p>

//       <div className="flex items-center justify-between mt-4">

//         <span className="font-bold text-green-700">
//           ₹00
//         </span>

//         <button className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm">
//           Add
//         </button>

//       </div>

//     </div>
//   );
// }