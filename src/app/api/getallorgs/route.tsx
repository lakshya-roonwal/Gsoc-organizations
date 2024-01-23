import AllOrgs from '@/modals/AllOrgs'
import HomeOrgs from '@/modals/HomeOrgs'
import {connect} from "@/dbConfig/dbConfig"
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const orgs = await AllOrgs.find()populate('projects');


        
    return NextResponse.json({ msg: "Sucess",orgs:orgs }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: " Error" });
  }
}

