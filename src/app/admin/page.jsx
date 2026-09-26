import React from 'react';
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  Tag,
  Settings,
  LogOut,
  Menu,
  Bell,
  Search,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  UserPlus,
} from "lucide-react";

function page() {
  return (
   <>
   
    <main className="min-h-screen bg-gray-50">

      {/* Top Navbar */}
      <header className="fixed left-0 right-0 top-0 z-50 h-16 border-b bg-white">

        <div className="flex h-full items-center justify-between px-4 sm:px-6">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
              <span className="text-lg text-green-700">✦</span>
            </div>

            <h1 className="text-xl font-bold text-green-800">
              VeggieMart
            </h1>

            <span className="hidden rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-500 sm:block">
              Admin
            </span>
          </div>


          {/* Right */}
          <div className="flex items-center gap-4">

            {/* Notification */}
            <button className="relative text-gray-600 hover:text-green-700">
              <Bell size={20} />

              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-green-600" />
            </button>


            {/* Admin */}
            <div className="hidden items-center gap-3 border-l pl-4 sm:flex">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 font-semibold text-green-700">
                A
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Admin
                </p>

                <p className="text-xs text-gray-400">
                  Administrator
                </p>
              </div>

            </div>


            <button className="lg:hidden">
              <Menu size={22} />
            </button>

          </div>

        </div>

      </header>


      {/* Sidebar */}
      <aside className="fixed bottom-0 left-0 top-16 hidden w-64 border-r bg-white lg:block">

        <div className="flex h-full flex-col p-4">

          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Main Menu
          </p>


          {/* Dashboard */}
          <a
            href="/admin"
            className="flex items-center gap-3 rounded-lg bg-green-50 px-4 py-3 text-sm font-semibold text-green-700"
          >
            <LayoutDashboard size={19} />
            Dashboard
          </a>


          {/* Orders */}
          <a
            href="#"
            className="mt-1 flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-700"
          >
            <ShoppingBag size={19} />
            Orders

            <span className="ml-auto rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">
              12
            </span>
          </a>


          {/* Products */}
          <a
            href="#"
            className="mt-1 flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-700"
          >
            <Package size={19} />
            Products
          </a>


          {/* Customers */}
          <a
            href="#"
            className="mt-1 flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-700"
          >
            <Users size={19} />
            Customers
          </a>


          {/* Offers */}
          <a
            href="#"
            className="mt-1 flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-700"
          >
            <Tag size={19} />
            Offers
          </a>


          <div className="my-5 border-t" />


          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Other
          </p>


          {/* Settings */}
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-700"
          >
            <Settings size={19} />
            Settings
          </a>


          {/* Logout */}
          <button className="mt-auto flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-red-500 hover:bg-red-50">
            <LogOut size={19} />
            Logout
          </button>

        </div>

      </aside>


      {/* Main Content */}
      <div className="pt-16 lg:pl-64">

        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">


          {/* Heading */}
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Dashboard
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Welcome back, Admin. Here's what's happening today.
              </p>
            </div>


            <button className="flex items-center justify-center gap-2 rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white hover:bg-green-800">
              <Package size={18} />
              Add Product
            </button>

          </div>


          {/* Search */}
          <div className="relative mt-6 max-w-md">

            <Search
              size={19}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search orders, products..."
              className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-green-600"
            />

          </div>


          {/* Stats */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">


            {/* Sales */}
            <div className="rounded-xl border bg-white p-5">

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-100 text-green-700">
                  <DollarSign size={21} />
                </div>

                <span className="flex items-center gap-1 text-xs font-medium text-green-600">
                  <TrendingUp size={14} />
                  +12.5%
                </span>

              </div>

              <p className="mt-5 text-sm text-gray-500">
                Total Sales
              </p>

              <h3 className="mt-1 text-2xl font-bold text-gray-900">
                ₹84,250
              </h3>

            </div>


            {/* Orders */}
            <div className="rounded-xl border bg-white p-5">

              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <ShoppingCart size={21} />
              </div>

              <p className="mt-5 text-sm text-gray-500">
                Total Orders
              </p>

              <h3 className="mt-1 text-2xl font-bold text-gray-900">
                1,248
              </h3>

            </div>


            {/* Products */}
            <div className="rounded-xl border bg-white p-5">

              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                <Package size={21} />
              </div>

              <p className="mt-5 text-sm text-gray-500">
                Products
              </p>

              <h3 className="mt-1 text-2xl font-bold text-gray-900">
                156
              </h3>

            </div>


            {/* Customers */}
            <div className="rounded-xl border bg-white p-5">

              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                <UserPlus size={21} />
              </div>

              <p className="mt-5 text-sm text-gray-500">
                Customers
              </p>

              <h3 className="mt-1 text-2xl font-bold text-gray-900">
                2,845
              </h3>

            </div>

          </div>


          {/* Bottom Section */}
          <div className="mt-6 grid gap-6 xl:grid-cols-3">


            {/* Recent Orders */}
            <div className="overflow-hidden rounded-xl border bg-white xl:col-span-2">

              <div className="flex items-center justify-between border-b px-5 py-4">

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Recent Orders
                  </h3>

                  <p className="mt-1 text-xs text-gray-400">
                    Latest customer orders
                  </p>
                </div>

                <button className="text-sm font-medium text-green-600">
                  View All
                </button>

              </div>


              <div className="overflow-x-auto">

                <table className="w-full min-w-[600px] text-left text-sm">

                  <thead className="bg-gray-50 text-xs uppercase text-gray-400">
                    <tr>
                      <th className="px-5 py-3">Order</th>
                      <th className="px-5 py-3">Customer</th>
                      <th className="px-5 py-3">Amount</th>
                      <th className="px-5 py-3">Status</th>
                    </tr>
                  </thead>


                  <tbody className="divide-y">

                    <tr>
                      <td className="px-5 py-4 font-medium text-gray-800">
                        #ORD-1024
                      </td>

                      <td className="px-5 py-4 text-gray-500">
                        Rahul
                      </td>

                      <td className="px-5 py-4 font-medium text-gray-800">
                        ₹1,240
                      </td>

                      <td className="px-5 py-4">
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                          Delivered
                        </span>
                      </td>
                    </tr>


                    <tr>
                      <td className="px-5 py-4 font-medium text-gray-800">
                        #ORD-1023
                      </td>

                      <td className="px-5 py-4 text-gray-500">
                        Anjali
                      </td>

                      <td className="px-5 py-4 font-medium text-gray-800">
                        ₹860
                      </td>

                      <td className="px-5 py-4">
                        <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                          Processing
                        </span>
                      </td>
                    </tr>


                    <tr>
                      <td className="px-5 py-4 font-medium text-gray-800">
                        #ORD-1022
                      </td>

                      <td className="px-5 py-4 text-gray-500">
                        Arjun
                      </td>

                      <td className="px-5 py-4 font-medium text-gray-800">
                        ₹2,150
                      </td>

                      <td className="px-5 py-4">
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                          Shipped
                        </span>
                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </div>


            {/* Quick Actions */}
            <div className="rounded-xl border bg-white">

              <div className="border-b px-5 py-4">

                <h3 className="font-semibold text-gray-900">
                  Quick Actions
                </h3>

                <p className="mt-1 text-xs text-gray-400">
                  Manage your store
                </p>

              </div>


              <div className="grid gap-3 p-5">


                <button className="flex items-center gap-4 rounded-lg border p-4 text-left hover:border-green-300 hover:bg-green-50">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-700">
                    <Package size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      Add Product
                    </p>

                    <p className="text-xs text-gray-400">
                      Add a new product
                    </p>
                  </div>

                </button>


                <button className="flex items-center gap-4 rounded-lg border p-4 text-left hover:border-green-300 hover:bg-green-50">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <Tag size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      Create Offer
                    </p>

                    <p className="text-xs text-gray-400">
                      Add a new discount
                    </p>
                  </div>

                </button>


                <button className="flex items-center gap-4 rounded-lg border p-4 text-left hover:border-green-300 hover:bg-green-50">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                    <Users size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      View Customers
                    </p>

                    <p className="text-xs text-gray-400">
                      Manage customers
                    </p>
                  </div>

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
   
   </>
  );
}

export default page;
