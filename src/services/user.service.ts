import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import tokenService from "./token.service";
import UserDto from "../dtos/user.dto";
import ApiError from "../exceptions/api.error";

const prisma = new PrismaClient();

class userService {
  async register(name: string, email: string, password: string) {
    const candidate = await prisma.user.findUnique({ where: { email } });

    if (candidate) {
      throw ApiError.ConflictError(
        `An account with email address ${email} already exists, Please login using this email address or reset the password.`,
      );
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const user = await prisma.user.create({
      data: { name, email, password: hashPassword },
    });
    const userDto = new UserDto(user);
    const tokens = await tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto,
    };
  }
}

export default new userService();
