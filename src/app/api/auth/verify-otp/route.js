// import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/db";
// import User from "@/model/userModel";

// export async function POST(request) {
//   try {
//     const { phone, otp } = await request.json();

//     if (!phone || !otp) {
//       return NextResponse.json(
//         {
//           message: "Phone number and OTP are required",
//         },
//         {
//           status: 400,
//         }
//       );
//     }

//     await connectDB();

//     const user = await User.findOne({ phone });

//     if (!user) {
//       return NextResponse.json(
//         {
//           message: "User not found",
//         },
//         {
//           status: 404,
//         }
//       );
//     }

//     // Check OTP
//     if (user.otp !== otp) {
//       return NextResponse.json(
//         {
//           message: "Invalid OTP",
//         },
//         {
//           status: 400,
//         }
//       );
//     }

//     // Check OTP expiry
//     if (user.otpExpiresAt < new Date()) {
//       return NextResponse.json(
//         {
//           message: "OTP has expired",
//         },
//         {
//           status: 400,
//         }
//       );
//     }

//     // Verify user
//     user.isVerified = true;

//     // Remove OTP after successful verification
//     user.otp = undefined;
//     user.otpExpiresAt = undefined;

//     await user.save();

//     return NextResponse.json({
//       message: "OTP verified successfully",
//       success: true,
//     });
//   } catch (error) {
//     console.error(error);

//     return NextResponse.json(
//       {
//         message: "Something went wrong",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }


import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(request) {
  try {
    const { phone, otp } = await request.json();

    console.log("Phone received:", phone);
    console.log("OTP received:", otp);

    if (!phone || !otp) {
      return NextResponse.json(
        {
          message: "Phone number and OTP are required",
        },
        {
          status: 400,
        }
      );
    }

    await connectDB();

    const user = await User.findOne({ phone });

    console.log("User found:", user);

    if (!user) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    console.log("Database OTP:", user.otp);
    console.log("Entered OTP:", otp);

    if (user.otp !== otp) {
      return NextResponse.json(
        {
          message: "Invalid OTP",
        },
        {
          status: 400,
        }
      );
    }

    if (user.otpExpiresAt < new Date()) {
      return NextResponse.json(
        {
          message: "OTP has expired",
        },
        {
          status: 400,
        }
      );
    }

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpiresAt = undefined;

    await user.save();

    return NextResponse.json({
      message: "OTP verified successfully",
      success: true,
    });

  } catch (error) {
    console.error("VERIFY OTP ERROR:", error);

    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}