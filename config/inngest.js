import { Inngest } from "inngest";
<<<<<<< HEAD
import connectDB from "./db";
import User from "@/models/user";

// Create a client to send and receive events.
export const inngest = new Inngest({ id: "quickcart-next" });

// Inngest Function to save user data to the database
export const syncUserCreation = inngest.createFunction(
  {
    id: "sync-user-from-clerk",
    event: "clerk/user.created",
  },
  async ({ event }) => {
=======
import connectDB from "@/config/db";
import connectDB from './db'; // optional, if needed
import User from "@/models/user"; // optional, if used in functions

// Create a client to send and receive events
export const inngest = new Inngest({ id: "quickcart-next" });

// Ingest Function to save user data to database
export const syncUserCreation = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "user/created" },
  async ({ event }) => {

>>>>>>> 0def79537be5346dd9fb40264f526f8a774bf5ec
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    const userData = {
      _id: id,
      email: email_addresses[0].email_address,
      name: first_name + " " + last_name,
<<<<<<< HEAD
      imageUri: image_url,
=======
      imageUrl: image_url,
>>>>>>> 0def79537be5346dd9fb40264f526f8a774bf5ec
    };

    await connectDB();
    await User.create(userData);
  }
);

<<<<<<< HEAD
// Inngest Function to update user data in the database
export const syncUserUpdation = inngest.createFunction(
  {
    id: "update-user-from-clerk",
    event: "clerk/user.updated",
  },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    const updatedData = {
      email: email_addresses[0].email_address,
      name: first_name + " " + last_name,
      imageUri: image_url,
    };

    await connectDB();
    await User.findByIdAndUpdate(id, updatedData);
  }
);

// Inngest function to delete user data from the database
export const syncUserDeletion = inngest.createFunction(
  {
    id: "delete-user-with-clerk",
    event: "clerk/user.deleted",
  },
  async ({ event }) => {
=======
// Ingest Function to update user data in database
export const syncUserUpdation = inngest.createFunction(
  { id: "sync-user-updated" },
  { event: "user/updated" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    const userData = {
      email: email_addresses[0].email_address,
      name: first_name + " " + last_name,
      imageUrl: image_url,
    };

    await connectDB();
    await User.findByIdAndUpdate(id, userData);
  }
);

// Ingest function to delete user from database
export const syncUserDeletion = inngest.createFunction(
  { id: "sync-user-deleted" },
  { event: "user/deleted" },
  async ({ event }) => {

>>>>>>> 0def79537be5346dd9fb40264f526f8a774bf5ec
    const { id } = event.data;

    await connectDB();
    await User.findByIdAndDelete(id);
  }
);