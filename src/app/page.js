import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* Top Bar */}
      <div className="bg-green-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between">
          <p>Freshness you can taste, quality you can trust.</p>

          <div className="hidden md:flex gap-6">
            <span>📍 Delivering across Kerala</span>
            <span>Help & Support</span>
          </div>
        </div>
      </div>


      {/* Navbar */}
      <nav className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-700 text-xl">✦</span>
            </div>

            <h1 className="text-2xl font-bold text-green-800">
              VeggieMart
            </h1>
          </div>


          {/* Menu */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <a className="text-green-700 border-b-2 border-green-600 pb-2">
              Home
            </a>

            <a className="hover:text-green-700">
              Vegetables
            </a>

            <a className="hover:text-green-700">
              Fruits
            </a>

            <a className="hover:text-green-700">
              Organic
            </a>

            <a className="hover:text-green-700">
              Offers
            </a>

            <a className="hover:text-green-700">
              About Us
            </a>
          </div>


          {/* Right */}
          <div className="flex items-center gap-5">

            {/* Search */}
            <div className="hidden md:flex items-center border border-gray-200 rounded-full px-4 py-2 w-60">
              <span className="text-gray-400 mr-2">⌕</span>

              <input
                type="text"
                placeholder="Search vegetables..."
                className="outline-none text-sm w-full"
              />
            </div>

            <button className="text-xl">
              ♙
            </button>

            <Link href={'/cart'}>
             <button className="relative text-xl cursor-pointer">
              🛒

              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            </Link>

           

          </div>

        </div>
      </nav>


      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-8">

        <div className="relative overflow-hidden rounded-3xl min-h-[480px]">

          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1800&q=90"
            alt="Fresh vegetables"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />


          <div className="relative z-10 max-w-xl px-8 md:px-14 py-20">

            <span className="inline-block border border-green-600 text-green-700 bg-white/80 px-4 py-2 rounded-full text-sm font-medium">
              100% Fresh & Organic
            </span>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight mt-6">
              Farm Fresh
              <span className="block text-green-700">
                Vegetables
              </span>
              Delivered to Your Home
            </h2>

            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              Handpicked fresh vegetables from trusted farms,
              delivered directly to your doorstep.
            </p>

            <button className="mt-8 bg-green-700 hover:bg-green-800 text-white px-7 py-3.5 rounded-lg font-semibold">
              Shop Now →
            </button>


            {/* Features */}
            <div className="flex flex-wrap gap-6 mt-10 text-sm">

              <div>
                <p className="font-semibold">✓ Fresh & Healthy</p>
              </div>

              <div>
                <p className="font-semibold">✓ Pesticide Free</p>
              </div>

              <div>
                <p className="font-semibold">✓ Fast Delivery</p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex justify-between items-end mb-7">

          <div>
            <p className="text-green-600 font-medium">
              Explore
            </p>

            <h2 className="text-3xl font-bold mt-1">
              Shop by Category
            </h2>
          </div>

          <button className="hidden md:block text-green-700 font-medium">
            View All Categories →
          </button>

        </div>


        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">

          <Category
            image="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
            title="Leafy Vegetables"
            count="18 Items"
          />

          <Category
            image="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80"
            title="Fresh Vegetables"
            count="24 Items"
          />

          <Category
            image="https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=600&q=80"
            title="Root Vegetables"
            count="12 Items"
          />

          <Category
            image="https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=600&q=80"
            title="Organic"
            count="20 Items"
          />

          <Category
            image="https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80"
            title="Fresh Produce"
            count="15 Items"
          />

        </div>

      </section>


      {/* Products */}
      <section className="bg-gray-50 py-14">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-end mb-8">

            <div>
              <p className="text-green-600 font-medium">
                Our Products
              </p>

              <h2 className="text-3xl font-bold mt-1">
                Best Sellers
              </h2>
            </div>

            <Link href={'/viewAllProducts'}>
             <button className="text-green-700 font-medium cursor-pointer">
              View All Products →
            </button>
            </Link>

           

          </div>


          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">

            <Product
              image="https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?auto=format&fit=crop&w=600&q=85"
              title="French Beans"
              weight="500g"
              price="₹40"
            />

            <Product
              image="https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=600&q=85"
              title="Fresh Tomato"
              weight="1 Kg"
              price="₹30"
            />

            <Product
              image="https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=85"
              title="Broccoli"
              weight="500g"
              price="₹60"
            />

            <Product
              image="https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=600&q=85"
              title="Fresh Carrot"
              weight="1 Kg"
              price="₹35"
            />

            <Product
              image="https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=85"
              title="Fresh Spinach"
              weight="250g"
              price="₹25"
            />

          </div>

        </div>

      </section>


      {/* Trust Features */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-100 rounded-2xl">

          <Feature
            title="Farm Fresh Produce"
            description="Directly from trusted farms"
          />

          <Feature
            title="Safe & Healthy"
            description="Fresh, clean & hygienic"
          />

          <Feature
            title="Fast Delivery"
            description="On-time doorstep delivery"
          />

          <Feature
            title="Secure Payments"
            description="100% secure payment options"
          />

        </div>

      </section>


      {/* Offer */}
      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="relative overflow-hidden rounded-3xl bg-green-900 min-h-[230px]">

          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80"
            alt="Vegetables"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />

          <div className="relative p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">

            <div className="text-white">

              <p className="text-green-300 font-medium">
                Special Offer
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Get 20% OFF on your
                <span className="block">
                  first order
                </span>
              </h2>

              <p className="mt-4 text-green-100">
                Use code:
                <span className="ml-2 font-bold bg-green-800 px-3 py-1 rounded">
                  WELCOME20
                </span>
              </p>

            </div>

            <button className="bg-green-500 hover:bg-green-400 text-white px-7 py-3 rounded-lg font-semibold whitespace-nowrap">
              Shop Now →
            </button>

          </div>

        </div>

      </section>


      {/* Footer */}
      <footer className="bg-gray-950 text-white">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

            <div className="col-span-2">

              <h2 className="text-2xl font-bold text-green-500">
                VeggieMart
              </h2>

              <p className="text-gray-400 mt-4 max-w-sm leading-relaxed">
                Your trusted online store for fresh,
                healthy and organic vegetables delivered
                directly to your home.
              </p>

            </div>


            <div>
              <h3 className="font-semibold mb-4">
                Quick Links
              </h3>

              <div className="space-y-3 text-gray-400 text-sm">
                <p>Home</p>
                <p>Vegetables</p>
                <p>Fruits</p>
                <p>Offers</p>
                <p>About Us</p>
              </div>
            </div>


            <div>
              <h3 className="font-semibold mb-4">
                Customer Service
              </h3>

              <div className="space-y-3 text-gray-400 text-sm">
                <p>Contact Us</p>
                <p>FAQs</p>
                <p>Shipping Policy</p>
                <p>Return Policy</p>
                <p>Terms & Conditions</p>
              </div>
            </div>


            <div>
              <h3 className="font-semibold mb-4">
                Newsletter
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Subscribe for fresh deals and offers.
              </p>

              <div className="flex mt-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded-l-lg text-black outline-none text-sm"
                />

                <button className="bg-green-600 px-4 rounded-r-lg text-sm font-medium">
                  Join
                </button>
              </div>

            </div>

          </div>


          <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
            © 2026 VeggieMart. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}


/* Category Component */

function Category({ image, title, count }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition">

      <img
        src={image}
        alt={title}
        className="w-full h-36 object-cover"
      />

      <div className="p-4 text-center">

        <h3 className="font-semibold">
          {title}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {count}
        </p>

      </div>

    </div>
  );
}


/* Product Component */

function Product({ image, title, weight, price }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-lg transition">

      <div className="relative bg-gray-50 rounded-xl overflow-hidden">

        <span className="absolute top-3 left-3 z-10 bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
          Fresh
        </span>

        <img
          src={image}
          alt={title}
          className="w-full h-44 object-cover"
        />

      </div>


      <div className="pt-4">

        <h3 className="font-semibold text-gray-900">
          {title}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {weight}
        </p>


        <div className="flex items-center justify-between mt-4">

          <p className="text-xl font-bold text-green-700">
            {price}
          </p>

          <button className="bg-green-700 hover:bg-green-800 text-white text-sm px-3 py-2 rounded-lg">
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}


/* Feature Component */

function Feature({ title, description }) {
  return (
    <div className="p-6 border-b md:border-b-0 md:border-r last:border-0 border-gray-100">

      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">
        ✓
      </div>

      <h3 className="font-semibold mt-4">
        {title}
      </h3>

      <p className="text-sm text-gray-500 mt-1">
        {description}
      </p>

    </div>
  );
}