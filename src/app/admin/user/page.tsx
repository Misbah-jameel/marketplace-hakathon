import { Button } from "@/app/components1/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components1/ui/table"

const users = [
    { id: 1, name: "Ahmed Khan", email: "ahmed.khan@muslimmail.com", role: "Admin" },
  { id: 2, name: "Fatima Ali", email: "fatima.ali@noorhub.net", role: "User" },
  { id: 3, name: "Bilal Hussain", email: "bilal.hussain@islamicmail.org", role: "User" },
  { id: 4, name: "Ayesha Siddiqui", email: "ayesha.siddiqui@deenconnect.com", role: "User" },
  { id: 5, name: "Hassan Raza", email: "hassan.raza@faithmail.net", role: "User" },
  { id: 6, name: "Zainab Sheikh", email: "zainab.sheikh@halalpost.com", role: "User" },
  { id: 7, name: "Usman Farooq", email: "usman.farooq@muslimnet.org", role: "User" },
  { id: 8, name: "Maryam Noor", email: "maryam.noor@hidayahmail.com", role: "User" },
  { id: 9, name: "Saad Iqbal", email: "saad.iqbal@ummahmail.net", role: "User" },
  { id: 10, name: "Hafsa Tariq", email: "hafsa.tariq@imanconnect.com", role: "User" }
]

export default function UsersPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Users</h2>
        <Button className="bg-blue-500">Add User</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2 bg-green-600">
                  Edit
                </Button>
                <Button variant="destructive" size="sm" className="bg-red-600">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

