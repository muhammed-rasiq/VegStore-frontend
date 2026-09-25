export default function OffersPage() {
  const offers = [
    {
      title: "Fresh Vegetables",
      discount: "30% OFF",
      description: "Get fresh vegetables at special prices.",
      code: "VEG30",
    },
    {
      title: "Fresh Fruits",
      discount: "25% OFF",
      description: "Save more on your favorite fresh fruits.",
      code: "FRUIT25",
    },
    {
      title: "First Order",
      discount: "₹100 OFF",
      description: "Special discount for your first order.",
      code: "WELCOME100",
    },
    {
      title: "Weekend Offer",
      discount: "20% OFF",
      description: "Enjoy exclusive weekend savings.",
      code: "WEEKEND20",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">

     


      {/* Hero */}
      <section className="bg-green-700 px-5 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">

          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-green-200">
            Limited Time Deals
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Fresh Deals, Better Savings
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-green-100">
            Grab our latest offers and save more on fresh vegetables,
            fruits and everyday groceries.
          </p>

          <button className="mt-7 rounded-lg bg-white px-6 py-3 font-semibold text-green-700 transition hover:bg-green-50">
            Shop Now
          </button>

        </div>
      </section>


      {/* Offers */}
      <section className="mx-auto max-w-7xl px-5 py-12">

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Today's Offers
          </h2>

          <p className="mt-2 text-gray-500">
            Choose an offer and enjoy great savings.
          </p>
        </div>


        {/* Offer Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {offers.map((offer, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              {/* Discount */}
              <div className="bg-green-50 px-6 py-8 text-center">

                <span className="inline-block rounded-full bg-green-700 px-4 py-2 text-sm font-bold text-white">
                  {offer.discount}
                </span>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {offer.title}
                </h3>

              </div>


              {/* Content */}
              <div className="p-6">

                <p className="min-h-[48px] text-sm leading-6 text-gray-500">
                  {offer.description}
                </p>


                {/* Coupon */}
                <div className="mt-5 flex items-center justify-between rounded-lg border border-dashed bg-gray-50 px-4 py-3">

                  <div>
                    <p className="text-xs text-gray-400">
                      Coupon Code
                    </p>

                    <p className="font-bold text-gray-800">
                      {offer.code}
                    </p>
                  </div>

                  <button className="text-sm font-semibold text-green-600 hover:text-green-700">
                    Copy
                  </button>

                </div>


                <button className="mt-5 w-full rounded-lg bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800">
                  Shop Now
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* Bottom Banner */}
      <section className="px-5 pb-14">

        <div className="mx-auto max-w-7xl rounded-2xl bg-gray-900 px-6 py-10 text-center text-white sm:px-10">

          <p className="text-sm font-medium text-green-400">
            FRESHNESS GUARANTEED
          </p>

          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
            Fresh groceries delivered to your door
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-400">
            Shop fresh products at great prices and enjoy convenient
            home delivery.
          </p>

          <button className="mt-6 rounded-lg bg-green-600 px-6 py-3 font-semibold hover:bg-green-700">
            Explore Products
          </button>

        </div>

      </section>



    </main>
  );
}