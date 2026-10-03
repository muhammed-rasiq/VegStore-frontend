"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function Page() {
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");

  const [message, setMessage] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const phone = searchParams.get("phone");

  async function handleVerify() {
    const otp =
      otp1 + otp2 + otp3 + otp4 + otp5 + otp6;

    if (otp.length !== 6) {
      setMessage("Please enter 6 digit OTP");
      return;
    }

    const response = await fetch("/api/auth/verify-otp", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        phone,
        otp,
      }),
    });

    const data = await response.json();

    if (data.success) {
      setMessage("Login successful!");

      // Later
      // router.push("/");
    } else {
      setMessage(data.message);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-5">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm sm:p-10">

        {/* Logo */}

        <div className="text-center">

          <h1 className="text-3xl font-bold text-green-700">
            VegStore
          </h1>

          <h2 className="mt-8 text-2xl font-bold text-gray-900">
            Verify your number
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Enter the 6-digit OTP sent to
          </p>

          <p className="mt-1 font-medium text-gray-800">
            {phone}
          </p>

        </div>


        {/* OTP Inputs */}

        <div className="mt-8 flex justify-center gap-2 sm:gap-3">

          <input
            type="text"
            maxLength="1"
            value={otp1}
            onChange={(e) => setOtp1(e.target.value)}
            className="h-12 w-11 rounded-lg border border-gray-300 text-center text-xl font-semibold outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 sm:h-14 sm:w-12 text-gray-950"
          />

          <input
            type="text"
            maxLength="1"
            value={otp2}
            onChange={(e) => setOtp2(e.target.value)}
            className="h-12 w-11 rounded-lg border border-gray-300 text-center text-xl font-semibold outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 sm:h-14 sm:w-12 text-gray-950"
          />

          <input
            type="text"
            maxLength="1"
            value={otp3}
            onChange={(e) => setOtp3(e.target.value)}
            className="h-12 w-11 rounded-lg border border-gray-300 text-center text-xl font-semibold outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 sm:h-14 sm:w-12 text-gray-950"
          />

          <input
            type="text"
            maxLength="1"
            value={otp4}
            onChange={(e) => setOtp4(e.target.value)}
            className="h-12 w-11 rounded-lg border border-gray-300 text-center text-xl font-semibold outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 sm:h-14 sm:w-12 text-gray-950"
          />

          <input
            type="text"
            maxLength="1"
            value={otp5}
            onChange={(e) => setOtp5(e.target.value)}
            className="h-12 w-11 rounded-lg border border-gray-300 text-center text-xl font-semibold outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 sm:h-14 sm:w-12 text-gray-950"
          />

          <input
            type="text"
            maxLength="1"
            value={otp6}
            onChange={(e) => setOtp6(e.target.value)}
            className="h-12 w-11 rounded-lg border border-gray-300 text-center text-xl font-semibold outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 sm:h-14 sm:w-12 text-gray-950"
          />

        </div>


        {/* Message */}

        {message && (
          <p className="mt-4 text-center text-sm">
            {message}
          </p>
        )}


        {/* Verify Button */}

        <button
          onClick={handleVerify}
          className="mt-7 w-full rounded-lg bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800"
        >
          Verify OTP
        </button>


        {/* Resend */}

        <div className="mt-6 text-center">

          <p className="text-sm text-gray-500">
            Didn't receive the code?
          </p>

          <button className="mt-2 text-sm font-semibold text-green-600 hover:text-green-700">
            Resend OTP
          </button>

        </div>


        {/* Change Number */}

        <button
          onClick={() => router.push("/login")}
          className="mt-5 w-full text-sm text-gray-400 hover:text-gray-600"
        >
          Change phone number
        </button>

      </div>

    </main>
  );
}

export default Page;