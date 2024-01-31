import SingleOrg from "@/app/AppPages/SingleOrg";

async function getSingleOrgData(id:string) {
const res = await fetch("http://localhost:3000/api/getsingleorg", {
    method: "POST",
    cache:"no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary    
    throw new Error("Failed to fetch data");

  }

  return res.json();
}

export default async function AllOrganizations({ params }: { params: { id: string } }) {
  const data = await getSingleOrgData(params.id);
  return <SingleOrg orgData ={data.org}/>;
};