import { connect } from "@/dbConfig/dbConfig";
import { AllOrgs,Projects } from "@/modals/AllOrgs";
const orgs=require('@/data/organizationswithprojects.json')

import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
  try {
    orgs.map(async(organization)=>{
      let orgObject={
        name:organization.name,
        description:organization.description,
        imageUrl:organization.imageUrl,
        years:organization.years,
        technologies:organization.technologies,
        topics:organization.topics,
        socials:organization.socials,
        websiteURL:organization.websiteURL,
      }
      const MainOrgs=await AllOrgs(orgObject);
      await MainOrgs.save();
    })
    return NextResponse.json({ msg: "Orgs uploaded" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: " Error" });
  }
}