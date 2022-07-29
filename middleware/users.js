import { users } from '../data/users.js';

export const getUser = (req, res, next) => {
  const user = users.find((user) => user.id == req.params.userId);
  if (!user) {
    return res.status(400).send({
      message: 'User not found!',
      data: null,
    });
  }
  req.user = user;
  next();
};

export const createUserId = (req, res, next) => {
  const id = users[users.length - 1].id + 1;
  req.id = id;
  next();
};
