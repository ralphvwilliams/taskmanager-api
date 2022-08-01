import { User } from '../models/user.js';

export const getUser = async (req, res, next) => {
  const user = await User.findOne({ username: req.params.username });
  if (!user) {
    return res.status(400).send({
      message: 'User not found!',
      data: null,
    });
  }
  req.user = user;
  next();
};

// export const createUserId = (req, res, next) => {
//   const id = users[users.length - 1].id + 1;
//   req.id = id;
//   next();
// };
