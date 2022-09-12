import Joi from "joi";

export const credentialSchema = Joi.object({
  title: Joi.string().max(50).required(),
  url: Joi.string().uri().trim().required(),
  userName: Joi.string().required(),
  password: Joi.string().required(),
});
