import express from 'express';
import userController from '../../controllers/user.controller';

const userRouters = express.Router();
userRouters
  .get('/', userController.getUsers)
  .get('/:id', userController.getUser)
  .patch('/:id', userController.updateUser)
  .delete('/:id', userController.deleteUser)

  .get('/:id/bookmark', userController.getBookmarks)
  .post('/:id/bookmark', userController.setBookmark)
  .delete('/:id/bookmark', userController.deleteBookmark);

export default userRouters;
