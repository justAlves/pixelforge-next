import { AppError } from "@/lib/errors";
import { UserService } from "@/services/user.service";
import { UserDTO } from "@/types/user";
import { NextResponse } from "next/server";

export async function POST(req: Request){
  try {
    const { email, username, password } = await req.json() as UserDTO;
    console.log(email, username, password);
    const user = await UserService.create({ email, username, password });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    if (error instanceof AppError) {
      return NextResponse.json({ message: error.message }, { status: error.statusCode });
    }
  }
}