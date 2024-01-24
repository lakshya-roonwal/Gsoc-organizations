import { connect } from "@/dbConfig/dbConfig";
import { AllOrgs } from "@/modals/AllOrgs";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request:NextRequest) {
  const body = await request.json();
  try {
    const id=body.id;
    const singleOrg = await AllOrgs.findById(id);
    if(!singleOrg)
    {
        return NextResponse.json({ msg: `Invalid Id` }, { status: 400 });
    }
    return NextResponse.json({ msg: `Your Id is ${id} `,org:singleOrg }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: " Error" });
  }
}