import { Router } from 'express';
import {
  addTask,
  deleteTask,
  getTasksByUserId,
  updateTask,
} from '../controllers/tasks.js';
import { getUserTasks } from '../middleware/tasks.js';
import { getUser } from '../middleware/users.js';
import {
  addtaskValidation,
  updateTaskValidation,
} from '../middleware/validation.js';

const router = Router();

//GET ROUTES
router.get('/user/tasks', getUser, getUserTasks, getTasksByUserId);

//POST ROUTES
router.post(
  '/user/:userId/tasks',
  addtaskValidation,
  getUser,
  getUserTasks,

  addTask
);

//PUT ROUTES
router.put(
  '/user/:userId/tasks/:taskId',
  updateTaskValidation,
  getUser,
  getUserTasks,
  updateTask
);

//DELETE ROUTES
router.delete('/user/:userId/tasks/:taskId', getUser, getUserTasks, deleteTask);

export default router;
