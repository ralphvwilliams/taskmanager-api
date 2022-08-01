import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  tasks: [
    {
      description: { type: String, required: true },
      completed: { type: Boolean, default: false },
    },
  ],
});

export const User = model('User', UserSchema);
