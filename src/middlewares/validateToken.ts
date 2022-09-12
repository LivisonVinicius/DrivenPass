import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { findById } from "../repositories/userRepository.js";

interface TokenInfo {
  id: number;
}

export default async function validateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers.authorization;
  if (!authorization) {
    throw { type: "Unauthorized", message: "Invalid Token" };
  }
  const token = authorization?.replace("Bearer ", "");
  try {
    const data = jwt.verify(token, process.env.SECRET_TOKEN!);
    const { id } = data as TokenInfo;
    const user = await findById(id);
    if (!user) {
      throw { type: "Unauthorized", message: "Invalid Token" };
    }
    res.locals.user = user;
    next();
  } catch (err) {
    console.log("oi");
    throw { type: "Unauthorized", message: "Invalid Token" };
  }
}
