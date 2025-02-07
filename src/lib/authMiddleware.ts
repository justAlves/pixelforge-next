import { verify } from "jsonwebtoken";
import { AppError } from "./errors";

export function authMiddleware(req: Request) {
  const token = localStorage.getItem("token");    

  if (!token) {
    return new AppError("Token not provided", 401);
  }

  try {
    const secret = process.env.JWT_SECRET!;
    const response = verify(token, secret) as { id: string; email: string; username: string };
    
    return { user: response };
  } catch (error) {
    return new AppError("Invalid token", 401);
  }
}
