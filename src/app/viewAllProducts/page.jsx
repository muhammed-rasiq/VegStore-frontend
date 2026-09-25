export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

     


      {/* Page Header */}
      <section className="bg-white border-b border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">

            <div>
              <p className="text-green-600 font-medium text-sm">
                Fresh From Our Store
              </p>

              <h2 className="text-4xl font-bold text-gray-900 mt-2">
                All Products
              </h2>

              <p className="text-gray-500 mt-3">
                Discover fresh vegetables and quality produce for your everyday needs.
              </p>
            </div>

            {/* Search */}
            <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 w-full md:w-80">
              <span className="text-gray-400 mr-2">
                ⌕
              </span>

              <input
                type="text"
                placeholder="Search products..."
                className="outline-none w-full text-sm"
              />
            </div>

          </div>

        </div>

      </section>


      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-4 gap-8">


          {/* Sidebar */}
          <aside className="lg:col-span-1">

            <div className="bg-white border border-gray-100 rounded-2xl p-6 sticky top-6">

              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">
                  Filters
                </h3>

                <button className="text-sm text-green-600">
                  Clear
                </button>
              </div>


              {/* Categories */}
              <div className="mt-7">

                <h4 className="font-medium text-gray-800 mb-4">
                  Categories
                </h4>

                <div className="space-y-3">

                  <label className="flex items-center gap-3 text-sm text-gray-600">
                    <input type="checkbox" className="accent-green-700" />
                    Vegetables
                  </label>

                  <label className="flex items-center gap-3 text-sm text-gray-600">
                    <input type="checkbox" className="accent-green-700" />
                    Leafy Vegetables
                  </label>

                  <label className="flex items-center gap-3 text-sm text-gray-600">
                    <input type="checkbox" className="accent-green-700" />
                    Root Vegetables
                  </label>

                  <label className="flex items-center gap-3 text-sm text-gray-600">
                    <input type="checkbox" className="accent-green-700" />
                    Fruits
                  </label>

                  <label className="flex items-center gap-3 text-sm text-gray-600">
                    <input type="checkbox" className="accent-green-700" />
                    Organic
                  </label>

                </div>

              </div>


              {/* Price */}
              <div className="border-t border-gray-100 mt-7 pt-7">

                <h4 className="font-medium text-gray-800 mb-4">
                  Price Range
                </h4>

                <div className="flex gap-3">

                  <input
                    type="text"
                    placeholder="Min ₹"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Max ₹"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none"
                  />

                </div>

              </div>


              {/* Availability */}
              <div className="border-t border-gray-100 mt-7 pt-7">

                <h4 className="font-medium text-gray-800 mb-4">
                  Availability
                </h4>

                <label className="flex items-center gap-3 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="accent-green-700"
                  />
                  In Stock
                </label>

              </div>

            </div>

          </aside>


          {/* Products Area */}
          <div className="lg:col-span-3">


            {/* Top Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">

              <p className="text-sm text-gray-500">
                Showing <span className="font-semibold text-gray-800">24</span> products
              </p>

              <select className="border border-gray-200 bg-white rounded-lg px-4 py-2.5 text-sm outline-none">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>

            </div>


            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">


              <ProductCard
                title="Fresh Tomato"
                weight="1 Kg"
                price="₹30"
                oldPrice="₹40"
                tag="Fresh"
              />

              <ProductCard
                title="Fresh Carrot"
                weight="1 Kg"
                price="₹35"
                oldPrice="₹45"
                tag="Popular"
              />

              <ProductCard
                title="Broccoli"
                weight="500 g"
                price="₹60"
                oldPrice="₹75"
                tag="Organic"
              />

              <ProductCard
                title="French Beans"
                weight="500 g"
                price="₹40"
                oldPrice="₹50"
                tag="Fresh"
              />

              <ProductCard
                title="Fresh Spinach"
                weight="250 g"
                price="₹25"
                oldPrice="₹30"
                tag="Organic"
              />

              <ProductCard
                title="Green Capsicum"
                weight="500 g"
                price="₹45"
                oldPrice="₹55"
                tag="Fresh"
              />

              <ProductCard
                title="Cauliflower"
                weight="1 Pc"
                price="₹45"
                oldPrice="₹55"
                tag="Fresh"
              />

              <ProductCard
                title="Cucumber"
                weight="1 Kg"
                price="₹35"
                oldPrice="₹45"
                tag="Popular"
              />

              <ProductCard
                title="Green Peas"
                weight="500 g"
                price="₹55"
                oldPrice="₹65"
                tag="Fresh"
              />

              <ProductCard
                title="Beetroot"
                weight="1 Kg"
                price="₹40"
                oldPrice="₹50"
                tag="Organic"
              />

              <ProductCard
                title="Potato"
                weight="1 Kg"
                price="₹32"
                oldPrice="₹40"
                tag="Fresh"
              />

              <ProductCard
                title="Onion"
                weight="1 Kg"
                price="₹38"
                oldPrice="₹45"
                tag="Popular"
              />

            </div>


            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-12">

              <button className="w-10 h-10 rounded-lg border border-gray-200 bg-white text-gray-500">
                ←
              </button>

              <button className="w-10 h-10 rounded-lg bg-green-700 text-white font-medium">
                1
              </button>

              <button className="w-10 h-10 rounded-lg border border-gray-200 bg-white text-gray-600">
                2
              </button>

              <button className="w-10 h-10 rounded-lg border border-gray-200 bg-white text-gray-600">
                3
              </button>

              <span className="px-2 text-gray-400">
                ...
              </span>

              <button className="w-10 h-10 rounded-lg border border-gray-200 bg-white text-gray-600">
                8
              </button>

              <button className="w-10 h-10 rounded-lg border border-gray-200 bg-white text-gray-500">
                →
              </button>

            </div>

          </div>

        </div>

      </section>


   

    </main>
  );
}


/* Product Card */

function ProductCard({
  title,
  weight,
  price,
  oldPrice,
  tag,
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition duration-300">

      {/* Product Image Placeholder */}
      <div className="relative h-52 bg-gray-100">

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm text-gray-400">
            Product Image
          </span>
        </div>


        {/* Tag */}
        <span className="absolute top-3 left-3 bg-green-100 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full">
          {tag}
        </span>


        {/* Wishlist */}
        <button className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full shadow-sm flex items-center justify-center text-gray-500 hover:text-red-500">
          ♡
        </button>

      </div>


      {/* Product Details */}
      <div className="p-4">

        <h3 className="font-semibold text-gray-900">
          {title}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {weight}
        </p>


        <div className="flex items-center gap-2 mt-3">

          <span className="text-lg font-bold text-green-700">
            {price}
          </span>

          <span className="text-sm text-gray-400 line-through">
            {oldPrice}
          </span>

        </div>


        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">

          <span className="text-yellow-500 text-sm">
            ★★★★★
          </span>

          <span className="text-xs text-gray-400">
            (24)
          </span>

        </div>


        {/* Add Button */}
        <button className="w-full mt-4 bg-green-700 hover:bg-green-800 text-white py-2.5 rounded-lg text-sm font-medium transition">
          Add to Cart
        </button>

      </div>

    </div>
  );
}