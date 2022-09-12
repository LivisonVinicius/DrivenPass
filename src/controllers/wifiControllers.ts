import { Request, Response } from "express";
import * as wifiService from "../services/wifiService.js";
import { IWifiType } from "../types/wifiType.js";

export async function createWifi(req: Request, res: Response) {
  const wifi: IWifiType = req.body;
  const user = res.locals.user;
  await wifiService.create(wifi, user.id);
  return res.status(201).send("Wifi Created");
}

export async function getWifi(req: Request, res: Response) {
  const id = Number(req.params.id);
  const user = res.locals.user;
  const wifi = await wifiService.get(user.id, id);
  return res.status(200).send(wifi);
}

export async function deleteWifi(req: Request, res: Response) {
  const id = Number(req.params.id);
  await wifiService.deleteWifi(id);
  return res.status(204).send("Wifi deleted");
}
