import { Inngest } from "inngest";
import connectDB from "./db";
import User from "@/models/user";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "quickcart-next" });

// Ingest Function to save user data to database
export const syncUserCreation = ingest.createFunction(
  { 
    id: "sync-user-from-clerk"
   },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const { id, first_name, last_name , email_addresses , image_url } = event.data
const userData = {
  _id:id,
  email: email_addresses[0].email_address,
  name:first_name + ' ' + last_name,
  imageUrl: image_url
}
await connectDB()
await User.create(userData)
  }
)

//ingest funvtion to update user data in database
export const syncUserUpdation = Ingest.createFunction(
{
id: 'update-user-from-clerk'
{ event: 'clerk/user.updated' },
async (event) => {
const { id, first_name, last_name, email_addresses, image_url } = event.data
const userData = {
_id: id,
email: email_addresses[0].email_address,
name: first_name + ' ' + last_name,
imageUrl: image_url
}
await connectDB()
await User.findByIdAndUpdate(Id,userData)
}
}

// Ingest function to delete user from database
export const syncUserDeletion = ingest.createFunction(
  {
  id: 'delete-user-with-clerk'
  },
  { event: 'clerk/user.deleted'} ,
  async ({event}) => {
    const { id } = event.data
    await connectDB()
    await User.findByIdAndDelete(id)
  }





