// "use client";

// import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
// import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

// const data = [
//   { name: "Product A", value: 400 },
//   { name: "Product B", value: 300 },
//   { name: "Product C", value: 300 },
//   { name: "Product D", value: 200 },
// ];

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// export default function DashboardPage() {
//   return (
//     <div className="space-y-6">
//       <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>

//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">$45,231.89</div>
//             <p className="text-xs text-muted-foreground">+20.1% from last month</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">New Customers</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">+2,350</div>
//             <p className="text-xs text-muted-foreground">+180.1% from last month</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Total Products</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">1,203</div>
//             <p className="text-xs text-muted-foreground">+19 new products this month</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Active Users</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">573</div>
//             <p className="text-xs text-muted-foreground">+201 since last hour</p>
//           </CardContent>
//         </Card>
//       </div>

//       <div className="grid gap-6 md:grid-cols-2">
//         <Card>
//           <CardHeader>
//             <CardTitle>Revenue Distribution</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="h-80">
//               <ResponsiveContainer width="100%" height="100%">
//                 <PieChart>
//                   <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
//                     {data.map((entry, index) => (
//                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                     ))}
//                   </Pie>
//                   <Tooltip />
//                   <Legend />
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
// // "use client";
// // import { useRouter } from "next/navigation";
// // import { useEffect, useState } from "react";

// // export default function DashboardPage() {
// //   const router = useRouter();
// //   const [isLoading, setIsLoading] = useState(true);
// //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);

// //   useEffect(() => {
// //     // Check if user is logged in (client-side only)
// //     const loggedIn = localStorage.getItem("isLoggedIn") === "true";
// //     setIsLoggedIn(loggedIn);

// //     if (!loggedIn) {
// //       router.push("/admin/dashboard"); // Redirect to login if not logged in
// //     } else {
// //       setIsLoading(false); // Allow rendering of the dashboard
// //     }
// //   }, [router]);

// //   const handleLogout = () => {
// //     localStorage.removeItem("isLoggedIn"); // Clear login status
// //     router.push("/admin/dashboard"); // Redirect to login
// //     router.refresh(); // Force a refresh to ensure the state is updated
// //   };

// //   if (isLoading) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center">
// //         <p>Loading...</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
// //       <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
// //         <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
// //         <p className="text-gray-500">Welcome to your dashboard!</p>
// //         <button
// //           onClick={handleLogout}
// //           className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01]"
// //         >
// //           Logout
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components1/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const data = [
  { name: "Product A", value: 400 },
  { name: "Product B", value: 300 },
  { name: "Product C", value: 300 },
  { name: "Product D", value: 200 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2,350</div>
            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,203</div>
            <p className="text-xs text-muted-foreground">+19 new products this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">+201 since last hour</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}