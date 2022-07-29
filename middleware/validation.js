import Joi from 'joi';

//TASK VALIDATION
export const addtaskValidation = (req, res, next) => {
  const taskSchema = Joi.object({
    description: Joi.string().required(),
  });
  const result = taskSchema.validate(req.body);
  if (result.error) {
    res.status(400).send({
      message: 'Something went wrong',
      data: result.error.details[0].message,
    });
  }
  next();
};

export const updateTaskValidation = (req, res, next) => {
  const updateTaskSchema = Joi.object({
    description: Joi.string(),
    completed: Joi.boolean(),
  });
  const result = updateTaskSchema.validate(req.body);
  if (result.error) {
    res.status(400).send({
      message: 'Something went wrong',
      data: result.error.details[0].message,
    });
  }
  next();
};

//USER VALIDATION
export const createUserValidation = (req, res, next) => {
  const userSchema = Joi.object({
    fullName: Joi.string().required(),
    email: Joi.string().email().required(),
    username: Joi.string().max(20).required(),
    password: Joi.string().min(8).required(),
  });
  const result = userSchema.validate(req.body);
  if (result.error) {
    res.status(400).send({
      message: 'Something went wrong',
      data: result.error.details[0].message,
    });
  }
  next();
};

export const updateUserValidation = (req, res, next) => {
  const updateUserSchema = Joi.object({
    fullName: Joi.string(),
    email: Joi.string().email(),
    username: Joi.string().max(20),
    password: Joi.string().min(8),
  });
  const result = updateUserSchema.validate(req.body);
  if (result.error) {
    res.status(400).send({
      message: 'Something went wrong',
      data: result.error.details[0].message,
    });
  }
  next();
};
