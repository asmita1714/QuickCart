import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  imageUrl: { type: String, required: true },
<<<<<<< HEAD
  cartItems: { type: Object, default: [] }
}, { minimize: false });

const User = mongoose.models.user || mongoose.model('user', userSchema);

export default User;
=======
  cartItems: { type: Object, default: {} },
}, { minimize: false })

const User = mongoose.models.user || mongoose.model('user', userSchema)

export default User
>>>>>>> 0def79537be5346dd9fb40264f526f8a774bf5ec
