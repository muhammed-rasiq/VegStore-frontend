import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/model/userModel";

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

    let user = await User.findOne({ phone });

    if (!user) {
      user = await User.create({
        phone,
      });
    }

    return NextResponse.json({
      message: "Phone number accepted",
      userId: user._id,
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