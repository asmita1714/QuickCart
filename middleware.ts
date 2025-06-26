// middleware.ts
import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware();

export const config = {
  matcher: [
    // Skip static files and Next.js internals
    '/((?!_next|.*\\..*|favicon.ico).*)',
    // Include API and tRPC routes
    '/(api|trpc)(.*)',
  ],
};
