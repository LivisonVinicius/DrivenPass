import { Request, Response } from "express";
import { IUserType } from "../types/userType.js";
import * as userService from "../services/userService.js";

export async function register(req: Request, res: Response) {
  const user: IUserType = req.body;
  await userService.registerUser(user);
  res.status(201).send("User created successfully!");
}

export async function login(req: Request, res: Response) {
  const user: IUserType = req.body;
  const token = await userService.loginUser(user);
  res.status(201).send(token);
}
