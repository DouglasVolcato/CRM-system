import * as path from "path";
import * as fs from "fs";
import { parseBuffer } from "../helpers/parseEnvBuffer";

export const envVariables = () => {
  const envFilePath = path.join(".env");
  const bufferEnv = fs.readFileSync(envFilePath);
  const envObject = parseBuffer(bufferEnv);

  const encryptKey = envObject.ENCRYPT_KEY || "SecretKey8500$&%";
  const port = envObject.PORT || 5000;

  return {
    encryptKey,
    port,
  };
};
