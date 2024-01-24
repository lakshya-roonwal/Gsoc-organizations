import { connect } from "@/dbConfig/dbConfig";
import { AllOrgs, Projects } from "@/modals/AllOrgs";
import mongoose from "mongoose";
const orgs = require("@/data/organizationswithprojects.json");
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    orgs.map(async(organization)=>{
      let orgData = await Projects.create({
        projects: organization.projects,
      });
      console.log(orgData);
      let ObjId=new mongoose.Types.ObjectId(orgData.id);
      await AllOrgs.updateOne(
        {
          name: organization.name,
        },
        {
          $set: {
            projects: ObjId,
          },
        }
      );
    })
    return NextResponse.json({ msg: "Projects uploaded"}, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: " Error" });
  }
}
