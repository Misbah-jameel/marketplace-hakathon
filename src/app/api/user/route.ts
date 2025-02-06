import { NextResponse } from "next/server"
import { getUserFromCookie } from "@/app/lib/auth"

export async function GET() {
  const user = getUserFromCookie()
  return NextResponse.json({ isLoggedIn: !!user })
}

