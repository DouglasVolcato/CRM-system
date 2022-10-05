import { UserControllerInterface } from "../interfaces/controllers.interfaces/user.controller.interface";
import { UserInterface } from "../interfaces/entities.interfaces/user.interface";

export class UserRoutes {
  controller: UserControllerInterface;
  router: any;

  constructor(controller: UserControllerInterface, router: any) {
    this.controller = controller;
    this.router = router;
  }

  route() {
    this.router.post("/create-user", (req: { body: UserInterface }, res: any) =>
      this.controller.createUserController(req, res)
    );

    this.router.delete(
      "/delete-user/:id",
      (req: { params: { id: string } }, res: any) =>
        this.controller.deleteUserController(req, res)
    );

    this.router.get(
      "/get-user-by-id/:id",
      (req: { params: { id: string } }, res: any) =>
        this.controller.getUserByIdController(req, res)
    );

    this.router.get(
      "/get-user-by-name/:name",
      (req: { params: { name: string } }, res: any) =>
        this.controller.getUserByNameController(req, res)
    );

    this.router.put(
      "/update-user/:id",
      (req: { params: { id: string }; body: UserInterface }, res: any) =>
        this.controller.updateUserController(req, res)
    );
  }
}
