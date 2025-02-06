import { cookies } from "next/headers"

// This is a simple in-memory store. In a real app, you'd use a database.
const users = [{ id: 1, email: "dayomuhammad892@gmail.com", password: "(Muhammad123)" }]

export function findUser(email: string, password: string) {
  return users.find((user) => user.email === email && user.password === password)
}

export async function setUserCookie(userId: number) {
  (await cookies()).set("userId", userId.toString(), {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    sameSite: "strict",
    path: "/",
  })
}

export async function getUserFromCookie() {
  const userId = (await cookies()).get("userId")?.value
  if (!userId) return null
  return users.find((user) => user.id === Number.parseInt(userId))
}

