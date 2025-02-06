// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Eye, EyeOff, Lock } from "lucide-react";

// import { Button } from "../../../../components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "../../../../components/ui/card";
// import { Input } from "../../../../components/ui/input";
// import { Label } from "../../../../components/ui/label";

// export default function AdminLogin() {
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Basic validation
//     if (!password) {
//       setError("Password is required.");
//       return;
//     }

//     // Mock authentication
//     if (password === "(Muhammad123)") {
//       router.push("/admin/dashboard");
//     } else {
//       setError("Invalid password. Please try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 via-black to-black">
//       <Card className="w-[350px] shadow-lg">
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-2xl text-center text-pink-500 font-bold">UniqueShop Admin</CardTitle>
//           <CardDescription className="text-center text-white">
//             Enter your password to access the dashboard
//           </CardDescription>
//         </CardHeader>
//         <form onSubmit={handleSubmit}>
//           <CardContent className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="password" className="text-white">
//                 Password
//               </Label>
//               <div className="relative text-white">
//                 <Input
//                   id="password"
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="pr-10"
//                   placeholder="Enter your password"
//                   aria-describedby="password-error"
//                 />
//                 <Button
//                   type="button"
//                   variant="ghost"
//                   size="icon"
//                   className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
//                   onClick={() => setShowPassword(!showPassword)}
//                   aria-label={showPassword ? "Hide password" : "Show password"}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-4 w-4 text-gray-500" />
//                   ) : (
//                     <Eye className="h-4 w-4 text-gray-500" />
//                   )}
//                 </Button>
//               </div>
//             </div>
//             {error && (
//               <p id="password-error" className="text-sm text-red-500">
//                 {error}
//               </p>
//             )}
//           </CardContent>
//           <CardFooter>
//             <Button className="w-full bg-pink-600 hover:bg-pink-700" type="submit">
//               <Lock className="mr-2 h-4 w-4" /> Login
//             </Button>
//           </CardFooter>
//         </form>
//       </Card>
//     </div>
//   );
// }
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Lock } from "lucide-react"

import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "../../../components/ui/card"
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"

export default function AdminLogin() {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!password) {
      setError("Password is required.")
      return
    }

    // Mock authentication
    if (password === "(Muhammad123)") {
      // Set a flag in localStorage to indicate the user is logged in
      localStorage.setItem("isLoggedIn", "true")
      router.push("/admin/dashboard")
    } else {
      setError("Invalid password. Please try again.")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 via-black to-black">
      <Card className="w-[350px] shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center text-pink-500 font-bold">UniqueShop Admin</CardTitle>
          <CardDescription className="text-center text-white">
            Enter your password to access the dashboard
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">
                Password
              </Label>
              <div className="relative text-black">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                  placeholder="Enter your password"
                  aria-describedby="password-error"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                </Button>
              </div>
            </div>
            {error && (
              <p id="password-error" className="text-sm text-red-500">
                {error}
              </p>
            )}
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-pink-600 hover:bg-pink-700" type="submit">
              <Lock className="mr-2 h-4 w-4" /> Login
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

