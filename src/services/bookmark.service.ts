import { PrismaClient } from '@prisma/client';
import ApiError from '../exceptions/api.error';

const prisma = new PrismaClient();
class bookmarkService {
  async getBookmarks(userId: number) {
    const bookmarks = await prisma.bookmark.findMany({ where: { userId } });
    if (!bookmarks.length) {
      throw ApiError.NothingFoundError(`Nothing find`);
    }
    return bookmarks;
  }

  async deleteBookmark(id: number) {
    if (typeof id === 'string') {
      throw ApiError.BadRequest(`The id must be number`);
    }
    const isExists = await prisma.bookmark.findUnique({ where: { id } });
    if (!isExists) {
      throw ApiError.NothingFoundError(`The anime with id:${id} doesn't exist`);
    }
    const deleted = await prisma.bookmark.delete({ where: { id } });
    return deleted
  }

  async setBookmark(userId: number, name: string) {
    const isExists = await prisma.bookmark.findMany({
      where: { userId, name },
    });
    if (isExists.length !== 0) {
      throw ApiError.ConflictError(
        `The "${name}" has been already added to the list`
      );
    } else {
      const bookmark = await prisma.bookmark.create({
        data: {
          name,
          user: {
            connect: { id: userId },
          },
        },
      });
      return bookmark;
    }
  }
}

export default new bookmarkService();
