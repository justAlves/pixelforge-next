import { AppError } from "@/lib/errors";
import { UserService } from "@/services/user.service";
import { UserDTO } from "@/types/user";
import { NextResponse } from "next/server";

export async function POST(req: Request){
  try {
    const { emailOrUsername, password } = await req.json() as { emailOrUsername: string, password: string };
    const user = await UserService.auth(password, emailOrUsername);

    const response = NextResponse.json(user, { status: 201 });

    response.cookies.set('token', user.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 30 * 24 * 60 * 60,
      path: '/'
    })

    return response;
  } catch (error) {
    console.log(error);
    if (error instanceof AppError) {
      return NextResponse.json({ message: error.message }, { status: error.statusCode });
    }
  }
}