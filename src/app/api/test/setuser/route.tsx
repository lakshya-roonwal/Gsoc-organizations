import { connect } from "@/dbConfig/dbConfig";
import { User, Video } from '@/modals/Test'
const fakeData = require('@/data/test.json'); // Adjust the path accordingly
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    fakeData["users"].map(async(user)=>{
      let userObj = {
        username:user.username,
        email:user.email,
      }
      const MainUser=await User(userObj);
      await MainUser.save();
    })


    return NextResponse.json({ msg: "Set Users Route" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: " Error" });
  }
}
