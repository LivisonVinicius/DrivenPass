import { ObjectSchema } from "joi";

import { registerSchema, loginSchema } from "./authSchemas.js";
import noteSchema from "./noteSchema.js";

const schemas: { [key: string]: ObjectSchema } = {
  registerSchema,
  loginSchema,
  noteSchema,
};

export default schemas;
