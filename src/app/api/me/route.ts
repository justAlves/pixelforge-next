import { authMiddleware } from "@/lib/authMiddleware";
import { AppError } from "@/lib/errors";
import { UserRepository } from "@/repositories/user.repository";
import { verify } from "jsonwebtoken";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET(req: Request) {
  try {
    const user = req.headers.get("Authorization");

    console.log(user);

    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const token = user.split(" ")[1];
    const secret = process.env.JWT_SECRET!;

    const response = verify(token, secret) as { id: string; email: string; username: string };  

    const userById = await UserRepository.getById(response.id);

    return NextResponse.json(userById, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}