import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/model/userModel";

// export async function POST(request) {
//   try {
//     const { phone } = await request.json();

//     if (!phone) {
//       return NextResponse.json(
//         {
//           message: "Phone number is required",
//         },
//         {
//           status: 400,
//         }
//       );
//     }

//     await connectDB();

//     let user = await User.findOne({ phone });

//     if (!user) {
//       user = await User.create({
//         phone,
//       });
//     }

//     return NextResponse.json({
//       message: "Phone number accepted",
//       userId: user._id,
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


export async function POST(request) {
  try {
    const { phone } = await request.json();

    if (!phone) {
      return NextResponse.json(
        {
          message: "Phone number is required",
        },
        {
          status: 400,
        }
      );
    }

    await connectDB();

    // Generate 6 digit OTP
    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    // OTP expires after 5 minutes
    const otpExpiresAt = new Date(
      Date.now() + 5 * 60 * 1000
    );

    let user = await User.findOne({ phone });

    if (!user) {
      user = await User.create({
        phone,
        otp,
        otpExpiresAt,
      });
    } else {
      user.otp = otp;
      user.otpExpiresAt = otpExpiresAt;

      await user.save();
    }

    console.log("OTP:", otp);

    return NextResponse.json({
      message: "OTP generated successfully",
    });
  } catch (error) {
    console.error(error);

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