import express from "express";
import bookmarkService from "../services/bookmark.service";
class userController {
  getUsers(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
    } catch (error) {
      next(error);
    }
  }
  getUser(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
    } catch (error) {
      next(error);
    }
  }

  async getBookmarks(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
      const { id } = req.params;
      const bookmarks = await bookmarkService.getBookmarks(Number(id));
      res.json(bookmarks).status(200);
    } catch (error) {
      next(error);
    }
  }

  async setBookmark(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
      const { name } = req.body;
      const { id } = req.params;
      const bookmark = await bookmarkService.setBookmark(
        Number(id),
        String(name),
      );
      return res.json(bookmark).status(200);
    } catch (error) {
      next(error);
    }
  }

  async deleteBookmark(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
      const { id } = req.body;
      const deleted = await bookmarkService.deleteBookmark(id);
      return res.json({ status: true, deleted }).status(200);
    } catch (error) {
      next(error);
    }
  }

  updateUser(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
    } catch (error) {
      next(error);
    }
  }
  deleteUser(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

export default new userController();
