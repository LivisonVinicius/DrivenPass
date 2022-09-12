import { ObjectSchema } from "joi";

import { registerSchema } from "./authSchemas.js";

const schemas: { [key: string]: ObjectSchema } = {
  registerSchema,
};

export default schemas;
