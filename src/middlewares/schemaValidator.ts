import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";
import schemas from "../schemas/schemas.js";

type SchemasType = keyof typeof schemas;

export default function schemaValidator(schema: SchemasType) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schemas[schema].validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      throw { type: "Unprocessable Entity", message: "Invalid body" };
    }
    return next();
  };
}
