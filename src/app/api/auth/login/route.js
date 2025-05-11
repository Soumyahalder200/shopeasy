import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  await connectToDatabase();
  const { email, password } = await req.json();

  // Find user by email
  const user = await User.findOne({ email });
  if (!user) {
    return Response.json({ message: "User not found" }, { status: 404 });
  }

  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return Response.json({ message: "Invalid credentials" }, { status: 401 });
  }

  // Generate JWT token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  return Response.json({ token, user }, { status: 200 });
}
