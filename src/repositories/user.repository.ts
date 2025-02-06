import { AppError } from "@/lib/errors";
import prisma from "@/lib/prisma";
import { UserDTO } from "@/types/user";
import Error from "next/error";

export const UserRepository = {
  async create(data: UserDTO) {
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: data.email },
          { username: data.username }
        ]
      }
    });

    if(user) {
      throw new AppError('User already exists', 400);
    }


    return prisma.user.create({ data });
  },

  async findByEmailOrUsername(emailOrUsername: string) {
    return prisma.user.findFirst({
      where: {
        OR: [
          { email: emailOrUsername },
          { username: emailOrUsername }
        ]
      },
    });
  },

  async getById(id: string) {
    return prisma.user.findUnique({
      where: {
        id
      },
      select: {
        id: true,
        email: true,
        username: true,
        createdAt: true,
        bio: true,
        image: true,
        deletedAt: true,
        updatedAt: true
      }
    });
  }
}