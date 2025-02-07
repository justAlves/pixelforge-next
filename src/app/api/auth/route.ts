import { AppError } from "@/lib/errors";
import { UserService } from "@/services/user.service";
import { UserDTO } from "@/types/user";
import { setCookie } from "cookies-next";
import { NextResponse } from "next/server";

export async function POST(req: Request){
  try {
    const { emailOrUsername, password } = await req.json() as { emailOrUsername: string, password: string };
    const user = await UserService.auth(password, emailOrUsername);

    const response = NextResponse.json(user, { status: 201 });

    response.cookies.set('token', user.token, {
      httpOnly: false,
      secure: false,
      maxAge: 30 * 24 * 60 * 60, // 30 days
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