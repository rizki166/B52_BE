// File: UserValidator.ts
import Joi from "joi";

// Schema for user creation
export const createUserSchema = Joi.object({
    nameUser: Joi.string().required().max(20),
    address: Joi.string().required(),
    gender: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required().min(8).max(20)
});

// Schema for login
export const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required().min(8).max(20)
});
