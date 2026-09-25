import React from 'react';

function page() {
 
   const products = [
    {
      name: "Fresh Tomatoes",
      category: "Vegetables",
      weight: "1 kg",
      price: "₹60",
      oldPrice: "₹75",
    },
    {
      name: "Fresh Apples",
      category: "Fruits",
      weight: "1 kg",
      price: "₹180",
      oldPrice: "₹220",
    },
    {
      name: "Fresh Carrots",
      category: "Vegetables",
      weight: "500 g",
      price: "₹45",
      oldPrice: "₹55",
    },
    {
      name: "Fresh Bananas",
      category: "Fruits",
      weight: "1 dozen",
      price: "₹70",
      oldPrice: "₹85",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">

     


      {/* Page Header */}
      <section className="bg-white px-5 py-10">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-medium text-green-600">
            Your Favorites
          </p>

          <div className="mt-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                My Wishlist
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Products you want to keep for later.
              </p>
            </div>

            <p className="text-sm font-medium text-gray-500">
              4 Items
            </p>

          </div>

        </div>

      </section>


      {/* Wishlist */}
      <section className="mx-auto max-w-7xl px-5 py-10">

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >

              {/* Product Image */}
              <div className="relative flex h-56 items-center justify-center bg-gray-100">

                <span className="text-sm text-gray-400">
                  Product Image
                </span>

                {/* Wishlist Button */}
                <button className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-red-500 shadow-sm hover:bg-red-50">
                  ♥
                </button>

              </div>


              {/* Product Details */}
              <div className="p-5">

                <p className="text-xs font-medium text-green-600">
                  {product.category}
                </p>

                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {product.weight}
                </p>


                {/* Price */}
                <div className="mt-4 flex items-center gap-2">

                  <span className="text-lg font-bold text-gray-900">
                    {product.price}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    {product.oldPrice}
                  </span>

                </div>


                {/* Add To Cart */}
                <button className="mt-5 w-full rounded-lg bg-green-700 py-3 text-sm font-semibold text-white transition hover:bg-green-800">
                  Add to Cart
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* Bottom Banner */}
      <section className="px-5 pb-12">

        <div className="mx-auto max-w-7xl rounded-2xl bg-green-700 px-6 py-10 text-center text-white">

          <h2 className="text-2xl font-bold sm:text-3xl">
            Found something you love?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-green-100">
            Add your favorite products to the cart and enjoy fresh
            groceries delivered to your door.
          </p>

          <a
            href="/viewAllProducts"
            className="mt-6 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-green-700 hover:bg-green-50"
          >
            Continue Shopping
          </a>

        </div>

      </section>


     

    </main>
  );
}

export default page;
