import { tasks } from '../data/tasks.js';

export const getUserTasks = (req, res, next) => {
  const { user } = req;
  const userTasks = tasks.find((task) => task.userId === user.id);
  req.userTasks = userTasks;
  next();
};

export const createTaskId = (req, res, next) => {
  const { userTasks } = req;
  const taskId = userTasks.tasks[userTasks.tasks.length - 1].id + 1;
  req.taskId = taskId;
  next();
};
