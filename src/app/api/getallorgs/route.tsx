import {AllOrgs} from '@/modals/AllOrgs'
import {connect} from "@/dbConfig/dbConfig"
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const orgs = await AllOrgs.find({}).select("-projects");
    console.log(orgs)
    return NextResponse.json({ msg: "Sucess",orgs:orgs }, { status: 200 });
    
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: " Error" });
  }
}

