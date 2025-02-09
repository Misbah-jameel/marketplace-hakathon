import { Avatar, AvatarFallback, AvatarImage } from "@/app/components1/ui/avatar"

const recentOrders = [
  {
    id: "1234",
    customer: "John Doe",
    email: "john@example.com",
    amount: "$59.99",
    status: "Complete",
  },
  {
    id: "1235",
    customer: "Jane Smith",
    email: "jane@example.com",
    amount: "$39.99",
    status: "Processing",
  },
  {
    id: "1236",
    customer: "Bob Johnson",
    email: "bob@example.com",
    amount: "$99.99",
    status: "Complete",
  },
  {
    id: "1237",
    customer: "Alice Brown",
    email: "alice@example.com",
    amount: "$29.99",
    status: "Pending",
  },
]

export function RecentOrders() {
  return (
    <div className="space-y-8">
      {recentOrders.map((order) => (
        <div key={order.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`https://avatar.vercel.sh/${order.email}`} alt={order.customer} />
            <AvatarFallback>
              {order.customer
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{order.customer}</p>
            <p className="text-sm text-muted-foreground">{order.email}</p>
          </div>
          <div className="ml-auto font-medium">{order.amount}</div>
        </div>
      ))}
    </div>
  )
}