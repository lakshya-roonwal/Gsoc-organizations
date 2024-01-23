import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
  const body = await request.json();
  try {
    return NextResponse.json({ msg: "Projects uploaded" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: " Error" });
  }
}