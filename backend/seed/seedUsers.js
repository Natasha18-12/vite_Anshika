import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectDB } from "../config/db.js";
import User from "../models/User.js";

dotenv.config();

const seedUsers = async () => {
  try {
    await connectDB();

    console.log("Deleting old users...");
    await User.deleteMany();

    console.log("Inserting new users...");
    await User.create([
      {
        email: "viewer@vite.co.in",
        password: "pass123",
        role: "viewer",
      },
      {
        email: "analyst@vite.co.in",
        password: "pass123",
        role: "analyst",
      },
    ]);

    console.log("Users seeded successfully!");
    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Seeding Error:", error.message);
    mongoose.connection.close();
    process.exit(1);
  }
};

seedUsers();
