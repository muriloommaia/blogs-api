import Joi from 'joi'

export const schemaToRegister = Joi.object({
  userName: Joi.string().strict().min(6).required(),
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(6).required()
});

export const schemaToLogin = Joi.object({
  email: Joi.string().email().required(),
});

export const schemaToPostDevo = Joi.object({
  title: Joi.string().min(6).required(),
  versicle: Joi.string().required(),
  book: Joi.string().required(),
  content: Joi.string().min(500).required(),
  categories: Joi.array().items(Joi.string().required()).required(),
});

export const schemaToCreateCategory = Joi.object({
  categories: Joi.array().items(Joi.string().required()).required(),
})

