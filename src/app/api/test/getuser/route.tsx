import { connect } from "@/dbConfig/dbConfig";
import { User} from "@/modals/Test";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request:NextRequest) {
  try {  
    const users=await User.find().populate({path:'videos',modal:"videos"});

    return NextResponse.json({ msg: "Get User Route",users }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: " Error" });
  }
}