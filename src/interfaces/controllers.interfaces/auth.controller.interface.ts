import * as http from "http";

export interface AuthControllerInterface {
  loginController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<http.IncomingMessage | http.ServerResponse>;
}
