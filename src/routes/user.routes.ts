import { UserControllerInterface } from "../interfaces/controllers.interfaces/user.controller.interface";

export class UserRoutes {
  controller: UserControllerInterface;
  router: string;
  req: any;
  res: any;

  constructor(
    controller: UserControllerInterface,
    router: string,
    req: any,
    res: any
  ) {
    this.controller = controller;
    this.router = router;
    this.req = req;
    this.res = res;
  }

  route() {
    if (this.router === "/users/create-user" && this.req.method === "POST") {
      this.controller.createUserController(this.req, this.res);
    } else if (
      this.router.includes("/users/delete-user/") &&
      this.req.method === "DELETE"
    ) {
      this.controller.deleteUserController(this.req, this.res);
    } else if (
      this.router.includes("/users/find-user-by-id/") &&
      this.req.method === "GET"
    ) {
      this.controller.getUserByIdController(this.req, this.res);
    } else if (
      this.router.includes("/users/find-user-by-name/") &&
      this.req.method === "GET"
    ) {
      this.controller.getUserByNameController(this.req, this.res);
    } else if (
      this.router.includes("/users/update-user/") &&
      this.req.method === "PUT"
    ) {
      this.controller.updateUserController(this.req, this.res);
    } else {
      this.res.writeHead(400, { "Content-Type": "application/json" });
      this.res.end(JSON.stringify({ message: "Route not found" }));
    }
  }
}
