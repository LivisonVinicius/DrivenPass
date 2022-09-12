import * as wifiRepository from "../repositories/wifiRepository.js";
import wifiSchema from "../schemas/wifiSchema.js";
import { IWifiAll, IWifiType } from "../types/wifiType.js";
import { cryptPassword, decryptPassword } from "../utils/cryptPassword.js";

export async function create(wifi: IWifiType, userId: number) {
  wifi.password = cryptPassword(wifi.password);

  await wifiRepository.insert({ ...wifi, usersId: userId });
  return;
}

export async function get(userId: number, id: number) {
  let wifi;
  if (id) {
    wifi = await wifiRepository.getById(id);
    if (!wifi || wifi.usersId !== userId) {
      throw { type: "Not Found", message: "Not Found" };
    }
    wifi.password = decryptPassword(wifi.password);
  } else {
    wifi = await wifiRepository.getByUserId(userId);
    if (!wifi) {
      throw { type: "Not Found", message: "Not Found" };
    }
    wifi = wifi.map((elem: IWifiAll) => {
      return {
        id: elem.id,
        title: elem.title,
        name: elem.name,
        password: decryptPassword(elem.password),
      };
    });
  }
  return wifi;
}

export async function deleteWifi(id: number) {
  if (!id) {
    throw { type: "Not Found", message: "Not Found" };
  }
  const wifi = await wifiRepository.getById(id);
  if (!wifi!) {
    throw { type: "Not Found", message: "Not Found" };
  }
  await wifiRepository.deleteById(id);
  return;
}
