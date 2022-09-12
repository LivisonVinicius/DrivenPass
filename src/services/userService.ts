import jwt from "jsonwebtoken";
import { IUserType } from "../types/userType.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import * as userRepository from "../repositories/userRepository.js";

dotenv.config();

export async function registerUser(user: IUserType) {
  const existUser = await userRepository.findByEmail(user.email);
  if (existUser) {
    throw { type: "Conflict", message: "Email already in use" };
  }
  user.password = bcrypt.hashSync(user.password, 10);
  await userRepository.insert(user);
  return;
}

export async function loginUser(user: IUserType) {
  const existUser = await userRepository.findByEmail(user.email);
  if (!existUser) {
    throw { type: "Unauthorized", message: "Password or Email wrong" };
  }
  if (!bcrypt.compare(user.password, existUser.password)) {
    throw { type: "Unauthorized", message: "Password or Email wrong" };
  }
  const token = jwt.sign({ id: existUser.id }, process.env.SECRET_TOKEN!, {
    expiresIn: "1d",
  });
  return token;
}
