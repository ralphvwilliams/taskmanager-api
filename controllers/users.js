import { User } from '../models/user.js';

//GET REQUESTS
// export const getUsers = (req, res) => {
//   res.status(200).send({
//     message: 'Users retreived successfully',
//     data: users,
//   });
// };

export const getSingleUser = (req, res) => {
  res.status(200).send({
    message: 'User retreived successfully',
    data: req.user,
  });
};

export const getUsers = async (req, res) => {
  const users = await User.find();
  return res.status(200).send({
    message: 'Users retreived successfully',
    data: users,
  });
};

//POST REQUESTS
export const createUser = async (req, res) => {
  const { fullName, email, username, password } = req.body;
  const user = await User.create({
    fullName,
    email,
    username,
    password,
    tasks: [
      {
        description: 'Walk',
      },
      {
        description: 'Talk',
      },
    ],
  });
  req.username = user.username;
  return res.status(200).send({
    message: 'User added successfully',
    data: user,
  });
};

//PUT REQUESTS
export const updateUser = (req, res) => {
  const { user } = req;
  const { fullName, email, username, password } = req.body;
  if (fullName) user.fullName = fullName;
  if (email) user.email = email;
  if (username) user.username = username;
  if (password) user.password = password;
  return res.status(200).send({
    message: 'User updated successfully',
    data: user,
  });
};

//DELETE REQUESTS
export const deleteUser = (req, res) => {
  const { user } = req;
  const newArray = users.filter((user) => user.id != req.params.userId);
  users = newArray;
  return res.status(200).send({
    message: 'User deleted sucessfully',
    data: user,
  });
};
