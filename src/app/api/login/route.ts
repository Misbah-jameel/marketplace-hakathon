import { NextResponse } from "next/server";
import { findUser, setUserCookie } from "@/app/lib/auth";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  const user = findUser(email, password);

  if (user) {
    setUserCookie(user.id);
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
