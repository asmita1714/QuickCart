import { serve } from "@inngest/next";
import { Inngest, syncUserCreation, syncUserDeletion, syncUserUpdation } from "@/config/inngest";

// Create an API that serves zero functions
export const [GET, POST, PUT] = serve({
  client: Inngest,
  functions: [
   syncUserCreation,
   syncUserUpdation,
   syncUserDeletion
  ],
});