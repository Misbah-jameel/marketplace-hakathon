import { UserProfile } from "@clerk/nextjs"

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <UserProfile
        appearance={{
          elements: {
            card: "bg-white shadow-md rounded-lg",
            navbar: "bg-pink-600",
            navbarButton: "text-white",
            headerTitle: "text-pink-600",
            formButtonPrimary: "bg-pink-600 hover:bg-pink-700",
          },
        }}
      />
    </div>
  )
}

