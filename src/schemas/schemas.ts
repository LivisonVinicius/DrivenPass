import { ObjectSchema } from "joi";

import { registerSchema, loginSchema } from "./authSchemas.js";
import noteSchema from "./noteSchema.js";
import wifiSchema from "./wifiSchema.js";
import { credentialSchema } from "./credentialSchema.js";
import cardSchema from "./cardSchema.js";

const schemas: { [key: string]: ObjectSchema } = {
  registerSchema,
  loginSchema,
  noteSchema,
  wifiSchema,
  credentialSchema,
  cardSchema,
};

export default schemas;
