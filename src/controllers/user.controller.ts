import { UserServicesInterface } from "../interfaces/services.interfaces/user.services.interface";

export class UserController {
  services: UserServicesInterface;

  constructor(services: UserServicesInterface) {
    this.services = services;
  }

  createUserController(req: any, res: any) {
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

  deleteUserController(req: any, res: any) {
    const id = Number(req.url.replace("/users/delete-user/", ""));
    const deletedUser = this.services.deleteUserUsecase.execute(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(deletedUser));
  }

  getUserByIdController(req: any, res: any) {
    const id = Number(req.url.replace("/users/find-user-by-id/", ""));
    const foundUser = this.services.getUserByIdUseCase.execute(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(foundUser));
  }

  getUserByNameController(req: any, res: any) {
    const name = req.url.replace("/users/find-user-by-name/", "");
    const foundUser = this.services.getUserByNameUseCase.execute(name);
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(foundUser));
  }

  updateUserController(req: any, res: any) {
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
