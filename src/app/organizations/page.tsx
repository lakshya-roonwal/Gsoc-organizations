import Organizations from "../pages/Organizations"

async function getData() {
  const res = await fetch("http://localhost:3000/api/getallorgs",{
    method: "GET", 
    cache: "no-cache", 
    headers: {  
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const OrganizationsHomePage = async() => {
  const data = await getData();
  return (
    <Organizations fetchedOrganizations={data.orgs}/>    
  )
}

export default OrganizationsHomePage