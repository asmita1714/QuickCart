import { Ingest } from "@ingest";
import connectDB from "./db";
import { Inngest } from "inngest";
import User from "./models/User"; 

// Create a client to send and receive events
export const ingest = new Ingest({ id: "quickcart-next" });

// Ingest function to save data in the database
export const syncUserCreation = ingest.createFunction (
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    const userData = {
      id,
      firstName: first_name,
      lastName: last_name,
      emailAddress: email_addresses[0]?.email_address || "",
      imageUrl: image_url,
    };

    await connectDB();
    await User.create(userData);
  }
);


// Ingest Function to update user data in the database
export const syncUserUpdation = ingest.createFunction(
  { id: "update-user-from-clerk" },
  { event: "clerk/user.updated" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    const userData = {
      emailAddress: email_addresses[0]?.email_address || "",
      firstName: first_name,
      lastName: last_name,
      imageUrl: image_url,
    };

    await connectDB();
    await User.findByIdAndUpdate(id, userData, { new: true });
  }
);

// Ingest function to delete user from database
export const syncUserDeletion = ingest.createFunction(
  { id: "delete-user-with-clerk" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    const { id } = event.data;

    await connectDB();
    await User.findByIdAndDelete(id);
  }
); 
