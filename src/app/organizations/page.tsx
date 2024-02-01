import Organizations from "../AppPages/Organizations";

const url = process.env.NEXT_PUBLIC_URL

async function getData() {
  const res = await fetch(url+"/api/getallorgs",{
    method: "GET", 
    cache: "no-store", 
    headers: {  
      "Content-Type": "application/json",
    },
  });
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