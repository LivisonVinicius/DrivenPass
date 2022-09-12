import Cryptr from "cryptr";
const cryptr = new Cryptr(process.env.CRYPT_SECRET!);

export function cryptPassword(password: string) {
  const cryptedPassword = cryptr.encrypt(password);
  return cryptedPassword;
}

export function decryptPassword(password: string) {
  const decryptedPassword = cryptr.decrypt(password);
  return decryptedPassword;
}
