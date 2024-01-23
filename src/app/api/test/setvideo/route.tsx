import { connect } from "@/dbConfig/dbConfig";
import { User, Videos } from "@/modals/Test";
import mongoose from "mongoose";
const fakeData = require("@/data/test.json"); // Adjust the path accordingly
import { NextRequest, NextResponse } from "next/server";

connect()

export async function GET(request: NextRequest) {
  try {
    fakeData["users"].map(async (user) => {
      user.videos.map(async(video)=>{
        let videoData = await Videos.create({
        title:video.title,
        description:video.description,
        url:video.url,
      });
      console.log(videoData);
      let ObjId = new mongoose.Types.ObjectId(videoData.id);
      await User.updateOne(
        {
          username:user.username
        },
        {
          $push:{
            videos:ObjId
          }
        }
      )




      })
    })

    return NextResponse.json({ msg: "Set Video route" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: " Error" });
  }
}
