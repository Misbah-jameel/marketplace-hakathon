

export default authMiddleware({
    publicRoutes: ["/", "/shop", "/product(.*)", "/login", "/signup", "/api/(.*)"],
  })
  
  export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  }
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function authMiddleware(arg0: { publicRoutes: string[] }) {
      throw new Error("Function not implemented.")
  }
  
  