import { Router } from 'express';
import {
  createUser,
  deleteUser,
  getSingleUser,
  getUsers,
  updateUser,
} from '../controllers/users.js';
import { createUserId, getUser } from '../middleware/users.js';
import {
  createUserValidation,
  updateUserValidation,
} from '../middleware/validation.js';

const router = Router();

//GET ROUTES
router.get('/users', getUsers);
router.get('/user/:userId', getUser, getSingleUser);

//POST AND PUT ROUTES
router.post('/user/create', createUserValidation, createUserId, createUser);
router.put('/user/:userId', updateUserValidation, getUser, updateUser);

//DELETE ROUTES
router.delete('user/:userId', getUser, deleteUser);

export default router;
