import { ObjectSchema } from "joi";

import { registerSchema, loginSchema } from "./authSchemas.js";

const schemas: { [key: string]: ObjectSchema } = {
  registerSchema,
  loginSchema,
};

export default schemas;
