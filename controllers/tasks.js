import { User } from '../models/user.js';

//GET REQUESTS
export const getTasksByUserId = (req, res) => {
  const { userTasks } = req;
  return res.status(200).send({
    message: 'Sucessful request',
    data: userTasks,
  });
};

//POST REQUESTS
export const addTask = async (req, res) => {
  const { description } = req.body;
  const { user } = req;
  const update = await User.updateOne(
    { username: req.params.username },
    { $push: { tasks: { description: description, completed: false } } }
  );
  return res.status(200).send({
    message: 'Task added sucessfully',
    data: update,
  });
};

export const updateTask = (req, res) => {
  const { description, completed } = req.body;
  const { userTasks } = req;
  const task = userTasks.tasks.find((task) => task.id == req.params.taskId);
  if (description) task.description = description;
  if (completed) task.completed = completed;
  return res.status(200).send({
    message: 'Updated successfully',
    data: task,
  });
};

//DELETE REQUESTS
export const deleteTask = (req, res) => {
  let { userTasks } = req;
  const newArray = userTasks.tasks.filter(
    (task) => task.id != req.params.taskId
  );
  userTasks.tasks = newArray;
  return res.status(200).send({
    message: 'Task deleted successfully',
    data: userTasks,
  });
};
