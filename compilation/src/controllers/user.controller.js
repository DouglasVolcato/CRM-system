"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(services) {
        this.services = services;
    }
    createUserController(req, res) {
        const body = req.body;
        const newUser = this.services.CreateUserUsecase.execute(body);
        res.send(newUser);
    }
    deleteUserController(req, res) {
        const id = Number(req.params.id);
        const deletedUser = this.services.DeleteUserUsecase.execute(id);
        res.send(deletedUser);
    }
    getUserByIdController(req, res) {
        const id = Number(req.params.id);
        const foundUser = this.services.GetUserByIdUseCase.execute(id);
        res.send(foundUser);
    }
    getUserByNameController(req, res) {
        const name = req.params.name;
        const foundUser = this.services.GetUserByNameUseCase.execute(name);
        res.send(foundUser);
    }
    updateUserController(req, res) {
        const id = Number(req.params.id);
        const body = req.body;
        const updatedUser = this.services.UpdateUserUseCase.execute(id, body);
        res.send(updatedUser);
    }
}
exports.UserController = UserController;
