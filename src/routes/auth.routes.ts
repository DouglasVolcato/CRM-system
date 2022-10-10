import * as http from "http";
import { AuthControllerInterface } from "../interfaces/controllers.interfaces/auth.controller.interface";

export class AuthRoutes {
  controller: AuthControllerInterface;
  router: string;
  req: http.IncomingMessage;
  res: http.ServerResponse;

  constructor(
    controller: AuthControllerInterface,
    router: string,
    req: http.IncomingMessage,
    res: http.ServerResponse
  ) {
    this.controller = controller;
    this.router = router;
    this.req = req;
    this.res = res;
  }

  route(): void | http.ServerResponse {
    if (this.router === "/auth/login" && this.req.method === "POST") {
      this.controller.loginController(this.req, this.res);
    } else {
      this.res.writeHead(400, { "Content-Type": "application/json" });
      this.res.end(JSON.stringify({ message: "Route not found" }));
    }
  }
}
