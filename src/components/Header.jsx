import Link from 'next/link';
import React from 'react';
import { Heart } from "lucide-react";
function Header() {
  return (
    <>
    
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
            <Link href={'/'}>
             <p className="text-green-700 border-b-2 border-green-600 pb-2">
              Home
            </p>
            </Link>
           
{/* 
            <a className="hover:text-green-700">
              Vegetables
            </a> */}

            {/* <a className="hover:text-green-700">
              Fruits
            </a>

            <a className="hover:text-green-700">
              Organic
            </a> */}
            <Link href={'/offers'}>
             <p className="text-green-700 ">
              Offers
            </p>
            </Link>

            <Link href={'/aboutUs'}>
             <p className="text-green-700">
              About Us
            </p>
            </Link>
           

           
          </div>


          {/* Right */}
          <div className="flex items-center gap-5">

             <Link href="/wishlist">
    <button className="relative cursor-pointer text-green-700">
      <Heart size={21} />

      <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-green-600 text-[10px] text-white">
        0
      </span>
    </button>
  </Link>

            
            <Link href={'/login'}>
            
            <button className="text-green-600 cursor-pointer ">
              Login
            </button> 
            
            </Link>
             

           

            <Link href={'/cart'}>
             <button className="relative text-xl cursor-pointer ">
              🛒

              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            </Link>

           

          </div>

        </div>
      </nav>
    
    </>
  );
}

export default Header;
