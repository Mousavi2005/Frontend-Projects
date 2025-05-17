import { headers } from "next/headers";

export async function GET() {
  const headerList = await headers()
  const authorize = headerList.get("Authorization")

  console.log(authorize)
  return new Response("<h1>profile<h1>",{
    headers: {
        "Content-Type" : "text/html"
    }
  })
}