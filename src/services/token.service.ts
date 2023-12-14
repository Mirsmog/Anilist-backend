import { PrismaClient, User } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { IUserDtoModel } from '../dtos/user.dto';
const prisma = new PrismaClient();
class tokenService {
  async generateToken(payload: IUserDtoModel) {
    const accessToken = jwt.sign(
      payload,
      process.env.JWT_ACCESS_KEY || 'PUBLIC_JWT_ACCESS_KEY',
      {
        expiresIn: '1d',
      }
    );
    const refreshToken = jwt.sign(
      payload,
      process.env.JWT_REFRESH_KEY || 'PUBLIC_JWT_REFRESH_KEY',
      {
        expiresIn: '30d',
      }
    );
    return {
      accessToken,
      refreshToken,
    };
  }
  async saveToken(userId: number, refreshToken: string) {
    const tokenData = await prisma.tokens.findUnique({
      where: { userId: userId },
    });
    if (tokenData) {
      tokenData.tokenBody = refreshToken;
    }
    const token = await prisma.tokens.create({
      data: {
        userId: userId,
        tokenBody: refreshToken,
      },
    });
    return token;
  }
}
export default new tokenService();
