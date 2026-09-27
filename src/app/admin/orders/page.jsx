import React from 'react';
import { Search } from "lucide-react";

function page() {

     const orders = [
    {
      id: "#ORD-1024",
      customer: "Rahul Kumar",
      phone: "+91 98765 43210",
      items: "5 Items",
      amount: "₹1,240",
      date: "27 Sep 2026",
      status: "Delivered",
    },
    {
      id: "#ORD-1023",
      customer: "Anjali Menon",
      phone: "+91 87654 32109",
      items: "3 Items",
      amount: "₹860",
      date: "27 Sep 2026",
      status: "Processing",
    },
    {
      id: "#ORD-1022",
      customer: "Arjun Nair",
      phone: "+91 76543 21098",
      items: "8 Items",
      amount: "₹2,150",
      date: "26 Sep 2026",
      status: "Shipped",
    },
    {
      id: "#ORD-1021",
      customer: "Fathima Ali",
      phone: "+91 98761 23456",
      items: "4 Items",
      amount: "₹740",
      date: "26 Sep 2026",
      status: "Delivered",
    },
    {
      id: "#ORD-1020",
      customer: "Vishnu Raj",
      phone: "+91 81234 56789",
      items: "6 Items",
      amount: "₹1,560",
      date: "25 Sep 2026",
      status: "Cancelled",
    },
    {
      id: "#ORD-1019",
      customer: "Sneha Thomas",
      phone: "+91 91234 56780",
      items: "2 Items",
      amount: "₹520",
      date: "25 Sep 2026",
      status: "Processing",
    },
  ];

  return (
    <>
    
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">

          <div>
            <h1 className="text-xl font-bold text-gray-900">
              Orders
            </h1>

            <p className="text-xs text-gray-500">
              Manage customer orders
            </p>
          </div>

          <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
            6 Orders
          </span>

        </div>
      </header>


      {/* Content */}
      <section className="mx-auto max-w-7xl px-5 py-8">

        {/* Search */}
        <div className="relative max-w-md">

          <Search
            size={19}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search orders..."
            className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-green-600"
          />

        </div>


        {/* Orders List */}
        <div className="mt-6 overflow-hidden rounded-xl border bg-white">

          {/* Desktop Header */}
          <div className="hidden border-b bg-gray-50 px-5 py-4 text-xs font-semibold uppercase tracking-wide text-gray-400 md:grid md:grid-cols-6">

            <span>Order</span>
            <span>Customer</span>
            <span>Items</span>
            <span>Amount</span>
            <span>Date</span>
            <span>Status</span>

          </div>


          {/* Orders */}
          <div className="divide-y">

            {orders.map((order) => (
              <div
                key={order.id}
                className="px-5 py-5 transition hover:bg-gray-50"
              >

                {/* Desktop */}
                <div className="hidden items-center md:grid md:grid-cols-6">

                  <div>
                    <p className="font-semibold text-gray-900">
                      {order.id}
                    </p>
                  </div>


                  <div>
                    <p className="font-medium text-gray-800">
                      {order.customer}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      {order.phone}
                    </p>
                  </div>


                  <p className="text-sm text-gray-500">
                    {order.items}
                  </p>


                  <p className="font-semibold text-gray-900">
                    {order.amount}
                  </p>


                  <p className="text-sm text-gray-500">
                    {order.date}
                  </p>


                  <div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Processing"
                          ? "bg-yellow-100 text-yellow-700"
                          : order.status === "Shipped"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>

                </div>


                {/* Mobile */}
                <div className="md:hidden">

                  <div className="flex items-start justify-between">

                    <div>
                      <p className="font-semibold text-gray-900">
                        {order.id}
                      </p>

                      <p className="mt-1 text-sm text-gray-700">
                        {order.customer}
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        {order.phone}
                      </p>
                    </div>


                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Processing"
                          ? "bg-yellow-100 text-yellow-700"
                          : order.status === "Shipped"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {order.status}
                    </span>

                  </div>


                  <div className="mt-4 flex items-center justify-between border-t pt-4">

                    <div>
                      <p className="text-xs text-gray-400">
                        Items
                      </p>

                      <p className="mt-1 text-sm font-medium text-gray-700">
                        {order.items}
                      </p>
                    </div>


                    <div>
                      <p className="text-xs text-gray-400">
                        Date
                      </p>

                      <p className="mt-1 text-sm text-gray-700">
                        {order.date}
                      </p>
                    </div>


                    <div className="text-right">
                      <p className="text-xs text-gray-400">
                        Amount
                      </p>

                      <p className="mt-1 font-semibold text-gray-900">
                        {order.amount}
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
    
    </>
  );
}

export default page;
