import { AppError } from "@/lib/errors";
import { UserRepository } from "@/repositories/user.repository";
import { UserDTO } from "@/types/user";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const UserService = {
  async create(data: UserDTO) {
    if(!data.email || !data.username || !data.password) {
      throw new Error('Missing required fields');
    }

    const passwordHash = await bcrypt.hash(data.password, 12);

    data.password = passwordHash;

    return UserRepository.create(data);
  },
  
  async auth(password: string, emailOrUsername: string) {
    const user = await UserRepository.findByEmailOrUsername(emailOrUsername);

    if(!user) {
      throw new AppError('Email/Username or password is incorrect', 400);
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if(!passwordMatch) {
      throw new AppError('Email/Username or password is incorrect', 400);
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, username: user.username },
      process.env.JWT_SECRET!,
      { expiresIn: '30d' }
    )

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        bio: user.bio,
        image: user.image,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }
    }
  },

  async getById(id: string) {
    return UserRepository.getById(id);
  }

}