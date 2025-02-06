// import NextAuth from "next-auth"
// import { authConfig } from "@/app/auth.config"; 

// const handler = NextAuth(authConfig)

// export { handler as GET, handler as POST }
// "use client";
// import { useAuth } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function Layout({ children }: { children: React.ReactNode }) {
//   const { isSignedIn } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (!isSignedIn) {
//       router.push("/login");
//     }
//   }, [isSignedIn, router]);

//   return <>{children}</>;
// }
