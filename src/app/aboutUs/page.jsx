export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

          {/* Logo */}
          <h1 className="text-2xl font-bold text-green-700">
            VegStore
          </h1>

          {/* Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="/"
              className="text-gray-600 hover:text-green-600"
            >
              Home
            </a>

            <a
              href="/viewAllProducts"
              className="text-gray-600 hover:text-green-600"
            >
              Products
            </a>

            <a
              href="/offers"
              className="text-gray-600 hover:text-green-600"
            >
              Offers
            </a>

            <a
              href="/about"
              className="font-semibold text-green-600"
            >
              About Us
            </a>

            <a
              href="/cart"
              className="text-gray-600 hover:text-green-600"
            >
              Cart
            </a>
          </div>

          {/* Mobile Menu */}
          <button className="rounded-lg border px-4 py-2 text-sm md:hidden">
            Menu
          </button>

        </div>
      </nav>


      {/* Hero Section */}
      <section className="bg-green-50 px-5 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-600">
            About VegStore
          </p>

          <h2 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Fresh food.
            <span className="text-green-600"> Simple shopping.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            We believe buying fresh groceries should be simple,
            convenient, and trustworthy. VegStore brings quality
            vegetables, fruits, and everyday groceries closer to you.
          </p>

        </div>

      </section>


      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20">

        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Image Placeholder */}
          <div className="flex h-[350px] items-center justify-center rounded-3xl bg-gray-100 sm:h-[420px]">

            <div className="text-center">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl">
                🥬
              </div>

              <p className="mt-4 font-medium text-gray-500">
                Freshness starts here
              </p>

            </div>

          </div>


          {/* Story */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Our Story
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Built around a simple idea
            </h2>

            <p className="mt-6 leading-7 text-gray-600">
              VegStore started with a simple thought: why should getting
              fresh groceries be complicated?
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              We wanted to create a place where people could easily
              discover fresh vegetables, fruits, and daily essentials
              without spending unnecessary time searching through
              different stores.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Our goal is to make everyday grocery shopping easier by
              bringing quality products, simple ordering, and convenient
              delivery together in one place.
            </p>

          </div>

        </div>

      </section>


      {/* Mission */}
      <section className="bg-gray-50 px-5 py-16 sm:py-20">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
            Our Mission
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Making fresh groceries easier for everyone
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-600">
            We aim to connect customers with fresh, quality products
            through a shopping experience that is simple, transparent,
            and convenient.
          </p>

        </div>


        {/* Values */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* Quality */}
          <div className="rounded-2xl bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
              ✓
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-900">
              Quality First
            </h3>

            <p className="mt-3 leading-6 text-gray-500">
              We focus on providing fresh and quality products for
              everyday needs.
            </p>
          </div>


          {/* Freshness */}
          <div className="rounded-2xl bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
              🌿
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-900">
              Freshness Matters
            </h3>

            <p className="mt-3 leading-6 text-gray-500">
              Fresh products are at the heart of everything we want
              VegStore to provide.
            </p>
          </div>


          {/* Convenience */}
          <div className="rounded-2xl bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
              ⚡
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-900">
              Simple & Convenient
            </h3>

            <p className="mt-3 leading-6 text-gray-500">
              From browsing to ordering, we want grocery shopping to
              feel effortless.
            </p>
          </div>

        </div>

      </section>


      {/* Why VegStore */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20">

        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          <div>

            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Why VegStore?
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              More than just a grocery store
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              VegStore is designed to make everyday shopping easier.
              Whether you need vegetables for dinner, fruits for the
              family, or groceries for the week, we want you to find
              what you need without the hassle.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
                  1
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Easy to Browse
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Find your everyday groceries quickly.
                  </p>
                </div>
              </div>


              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
                  2
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Fresh Products
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Quality and freshness remain our priority.
                  </p>
                </div>
              </div>


              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
                  3
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Convenient Shopping
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Shop from anywhere and save your time.
                  </p>
                </div>
              </div>

            </div>

          </div>


          {/* Stats */}
          <div className="rounded-3xl bg-green-700 p-8 text-white sm:p-10">

            <h3 className="text-2xl font-bold">
              Freshness you can count on
            </h3>

            <p className="mt-3 leading-7 text-green-100">
              We are building VegStore with one goal in mind —
              making everyday grocery shopping better.
            </p>


            <div className="mt-10 grid grid-cols-2 gap-8">

              <div>
                <p className="text-3xl font-bold">100+</p>
                <p className="mt-1 text-sm text-green-200">
                  Products
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">24/7</p>
                <p className="mt-1 text-sm text-green-200">
                  Online Shopping
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">100%</p>
                <p className="mt-1 text-sm text-green-200">
                  Fresh Focus
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">Easy</p>
                <p className="mt-1 text-sm text-green-200">
                  Shopping
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="px-5 pb-16">

        <div className="mx-auto max-w-7xl rounded-3xl bg-gray-900 px-6 py-14 text-center text-white sm:px-10">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to shop fresh?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Explore our collection of fresh vegetables, fruits and
            everyday groceries.
          </p>

          <a
            href="/viewAllProducts"
            className="mt-7 inline-block rounded-lg bg-green-600 px-7 py-3 font-semibold transition hover:bg-green-700"
          >
            Explore Products
          </a>

        </div>

      </section>


      {/* Footer */}
      <footer className="border-t bg-white px-5 py-7 text-center text-sm text-gray-500">
        © 2026 VegStore. All rights reserved.
      </footer>

    </main>
  );
}