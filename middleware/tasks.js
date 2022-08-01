export const getUserTasks = (req, res, next) => {
  const { user } = req;
  const { tasks } = user;
  req.userTasks = tasks;
  next();
};
