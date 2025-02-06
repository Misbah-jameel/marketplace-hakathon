import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = cookies();
  
  // Delete the cookie instead of setting it to empty
  (await
    cookieStore).delete("userId");

  return NextResponse.json({ success: true }, { status: 200 });
}
// import { NextResponse } from "next/server";
// import { cookies } from "next/headers";

// export async function POST() {
//   (await cookies()).delete("userId");

//   return NextResponse.json({ success: true });
// }
