import * as http from "http";
import { UserServicesInterface } from "../interfaces/services.interfaces/user.services.interface";

export class UserController {
  services: UserServicesInterface;

  constructor(services: UserServicesInterface) {
    this.services = services;
  }

  createUserController(req: http.IncomingMessage, res: http.ServerResponse) {
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

      const newUser = this.services.createUserUsecase.execute(userObj);

      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(newUser));
    });
  }

  deleteUserController(req: http.IncomingMessage, res: http.ServerResponse) {
    const id = Number(req.url?.replace("/users/delete-user/", ""));
    const deletedUser = this.services.deleteUserUsecase.execute(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(deletedUser));
  }

  getUserByIdController(req: http.IncomingMessage, res: http.ServerResponse) {
    const id = Number(req.url?.replace("/users/find-user-by-id/", ""));
    const foundUser = this.services.getUserByIdUseCase.execute(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(foundUser));
  }

  getUserByNameController(req: http.IncomingMessage, res: http.ServerResponse) {
    if (req.url) {
      const name = req.url?.replace("/users/find-user-by-name/", "");
      const foundUser = this.services.getUserByNameUseCase.execute(name);
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(foundUser));
    }
    res.writeHead(400, { "Content-Type": "application/json" });
    return res.end({ message: "Invalid url." });
  }

  updateUserController(req: http.IncomingMessage, res: http.ServerResponse) {
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

      const updatedUser = this.services.updateUserUseCase.execute(id, userObj);
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(updatedUser));
    });
  }
}
