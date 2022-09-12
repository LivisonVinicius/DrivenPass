import { ObjectSchema } from "joi";

import { registerSchema, loginSchema } from "./authSchemas.js";
import noteSchema from "./noteSchema.js";
import wifiSchema from "./wifiSchema.js";

const schemas: { [key: string]: ObjectSchema } = {
  registerSchema,
  loginSchema,
  noteSchema,
  wifiSchema,
};

export default schemas;
