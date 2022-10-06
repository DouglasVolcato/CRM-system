import * as http from "http";
import { UserServicesInterface } from "../interfaces/services.interfaces/user.services.interface";

export class UserController {
  services: UserServicesInterface;

  constructor(services: UserServicesInterface) {
    this.services = services;
  }

  async createUserController(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = "";

    req.on("data", (chunk: any) => {
      body += chunk.toString();
    });

    return req.on("end", async () => {
      const { id, name, username, email, password } = await JSON.parse(body);

      const userObj = {
        id,
        name,
        username,
        email,
        password,
      };

      const newUser = await this.services.createUserUsecase.execute(userObj);

      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(newUser));
    });
  }

  async deleteUserController(req: http.IncomingMessage, res: http.ServerResponse) {
    const id = Number(req.url?.replace("/users/delete-user/", ""));
    const deletedUser = await this.services.deleteUserUsecase.execute(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(deletedUser));
  }

  async getUserByIdController(req: http.IncomingMessage, res: http.ServerResponse) {
    const id = Number(req.url?.replace("/users/find-user-by-id/", ""));
    const foundUser = await this.services.getUserByIdUseCase.execute(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(foundUser));
  }

  async getUserByNameController(req: http.IncomingMessage, res: http.ServerResponse) {
    if (req.url) {
      const name = req.url?.replace("/users/find-user-by-name/", "");
      const foundUser = await this.services.getUserByNameUseCase.execute(name);
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(foundUser));
    }
    res.writeHead(400, { "Content-Type": "application/json" });
    return res.end({ message: "Invalid url." });
  }

  async updateUserController(req: http.IncomingMessage, res: http.ServerResponse) {
    let body = "";

    req.on("data", (chunk: any) => {
      body += chunk.toString();
    });

    return req.on("end", async () => {
      const { id, name, username, email, password } = await JSON.parse(body);

      const userObj = {
        id,
        name,
        username,
        email,
        password,
      };

      const updatedUser = await this.services.updateUserUseCase.execute(id, userObj);
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(updatedUser));
    });
  }
}
