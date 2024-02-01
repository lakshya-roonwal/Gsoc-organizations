import SingleOrg from "@/app/AppPages/SingleOrg";

const singleorgUrl = process.env.NEXT_PUBLIC_API_URL+"/api/getsingleorg";

async function getSingleOrgData(id: string) {
  const res = await fetch(singleorgUrl, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: id }),
  });

  // Check if the response is okay
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  try {
    // Try parsing the JSON response
    return await res.json();
  } catch (error) {
    // Handle parsing errors
    throw new Error("Failed to parse JSON response");
  }
}

export default async function GetSingleOrg({ params }: { params: { id: string } }) {
  try {
    // Fetch data inside a try-catch block for error handling
    const data = await getSingleOrgData(params.id);
    
    // Verify the data structure before passing it to the component
    if (data && data.org) {
      return <SingleOrg orgData={data.org} />;
    } else {
      throw new Error("Invalid data structure");
    }
  } catch (error) {
    // Handle errors by displaying an error message or redirecting
    console.error("Error fetching data",error);
    return <div>Error fetching data</div>;
  }
}
