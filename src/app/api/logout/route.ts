import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = cookies();
  (await cookieStore).delete("userId");

  return NextResponse.json({ success: true }, { status: 200 });
}
// import { NextResponse } from "next/server";
// import { cookies } from "next/headers";

// export async function POST() {
//   const cookieStore = cookies();

//   (await
//         cookieStore).delete("userId");

//   return NextResponse.json(
//     { success: true, message: "Cookie deleted successfully" },
//     { status: 200 }
//   );
// }