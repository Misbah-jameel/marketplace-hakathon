import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary: "bg-pink-600 hover:bg-pink-700",
              footerActionLink: "text-pink-600 hover:text-pink-700",
              card: "bg-white shadow-md rounded-lg",
            },
          }}
          afterSignUpUrl="/"
          signInUrl="/login"
        />
      </div>
    </div>
  )
}

