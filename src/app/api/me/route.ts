import { authMiddleware } from "@/lib/authMiddleware";
import { AppError } from "@/lib/errors";
import { UserRepository } from "@/repositories/user.repository";
import { verify } from "jsonwebtoken";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET(req: Request) {
  try {
    const user = authMiddleware(req);

    if(user instanceof AppError) {
      return NextResponse.json({ message: user.message }, { status: user.statusCode });
    }

    const userById = await UserRepository.getById(user.user.id);

    return NextResponse.json(userById, { status: 200 });
  } catch (error) {
    
  }
}