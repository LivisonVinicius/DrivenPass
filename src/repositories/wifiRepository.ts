import { client } from "../database.js";
import { IWifiInsert } from "../types/wifiType.js";

export async function insert(wifi: IWifiInsert) {
  await client.wifi.create({ data: wifi });
  return;
}

export async function getByUserId(usersId: number) {
  const wifi = await client.wifi.findMany({ where: { usersId } });
  return wifi;
}

export async function getById(id: number) {
  const wifi = await client.wifi.findUnique({ where: { id } });
  return wifi;
}

export async function deleteById(id: number) {
  await client.wifi.delete({ where: { id } });
  return;
}
