import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
  try {
    
    return NextResponse.json({ msg: "API Working Properly" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: " Error" });
  }
}