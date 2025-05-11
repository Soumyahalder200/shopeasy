// import { connectToDatabase } from "@/lib/mongodb";
// import User from "@/models/User";

// export async function GET() {
//   await connectToDatabase();
//   const users = await User.find({});
  
//   return new Response(JSON.stringify(users), {
//     status: 200,
//     headers: { "Content-Type": "application/json" },
//   });
// }

// export async function POST(req) {
//   await connectToDatabase();
//   const body = await req.json(); // Parse JSON body

//   const newUser = new User(body);
//   await newUser.save();

//   return new Response(JSON.stringify(newUser), {
//     status: 201,
//     headers: { "Content-Type": "application/json" },
//   });
// }
