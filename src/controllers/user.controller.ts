import { UserServicesInterface } from "../interfaces/services.interfaces/user.services.interface";
import { UserInterface } from "../interfaces/entities.interfaces/user.interface";

export class UserController {
  services: UserServicesInterface;

  constructor(services: UserServicesInterface) {
    this.services = services;
  }

  createUserController(req: { body: UserInterface }, res: any) {
    const body = req.body;
    const newUser = this.services.CreateUserUsecase.execute(body);
    res.send(newUser);
  }

  deleteUserController(req: { params: { id: string } }, res: any) {
    const id = Number(req.params.id);
    const deletedUser = this.services.DeleteUserUsecase.execute(id);
    res.send(deletedUser);
  }

  getUserByIdController(req: { params: { id: string } }, res: any) {
    const id = Number(req.params.id);
    const foundUser = this.services.GetUserByIdUseCase.execute(id);
    res.send(foundUser);
  }

  getUserByNameController(req: { params: { name: string } }, res: any) {
    const name = req.params.name;
    const foundUser = this.services.GetUserByNameUseCase.execute(name);
    res.send(foundUser);
  }

  updateUserController(
    req: { params: { id: string }; body: UserInterface },
    res: any
  ) {
    const id = Number(req.params.id);
    const body = req.body;
    const updatedUser = this.services.UpdateUserUseCase.execute(id, body);
    res.send(updatedUser);
  }
}
