import express from 'express';
import userService from '../services/user.service';
import ApiError from '../exceptions/api.error';
class authController {
  async register(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const { name, email, password } = req.body;
      const userData = await userService.register(name, email, password);
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData).status(200);
    } catch (error) {
      next(error)
    }
  }
  async login(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
    } catch (error) {
      res.sendStatus(500);
      console.log(`login error: ${error}`);
    }
  }
  async logout(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
    } catch (error) {
      res.sendStatus(500);
      console.log(`logout error: ${error}`);
    }
  }
  async refresh(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
    } catch (error) {
      res.sendStatus(500);
      console.log(`refresh error: ${error}`);
    }
  }
}

export default new authController();
