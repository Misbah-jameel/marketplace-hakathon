// "use client"

// import { createContext, useContext, type ReactNode } from "react"
// import { useUser, useClerk, type UserResource } from "@clerk/nextjs"

// interface AuthContextType {
//   user: UserResource | null
//   isLoaded: boolean
//   isSignedIn: boolean | undefined
//   signOut: () => Promise<void>
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined)

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const { user, isLoaded, isSignedIn } = useUser()
//   const { signOut } = useClerk()

//   return <AuthContext.Provider value={{ user, isLoaded, isSignedIn, signOut }}>{children}</AuthContext.Provider>
// }

// export function useAuth() {
//   const context = useContext(AuthContext)
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider")
//   }
//   return context
// }

