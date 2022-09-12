import joi from "joi";

const cardSchema = joi.object({
  title: joi.string().required(),
  number: joi.string().length(16).required(),
  nameCard: joi.string().required(),
  codeSecurity: joi.string().length(3).required(),
  expirationDate: joi.string().required(),
  isVirtual: joi.boolean().strict().required(),
  type: joi.valid("credit", "debit", "both").required(),
  password: joi.string().min(4).max(6).required(),
});

export default cardSchema;
