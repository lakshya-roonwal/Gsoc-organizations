import Organizations from "../AppPages/Organizations";

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL+"/api/getallorgs");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function AllOrganizations() {
  const data = await getData();
  return (
    <Organizations fetchedOrganizations={data.orgs}/>    
  )
}