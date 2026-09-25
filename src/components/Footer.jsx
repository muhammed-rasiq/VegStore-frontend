import React from 'react';

function Footer() {
  return (
   <>
   
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
   
   </>
  );
}

export default Footer;
