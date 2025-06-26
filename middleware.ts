// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)", // protect all routes except static files and Next.js internals
    "/",                           // add more public routes if needed
  ],
};
