"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(services) {
        this.services = services;
    }
    createUserController(req, res) {
        const body = req.body;
        const newUser = this.services.createUserUsecase.execute(body);
        return res.send(newUser);
    }
    deleteUserController(req, res) {
        const id = Number(req.params.id);
        const deletedUser = this.services.deleteUserUsecase.execute(id);
        return res.send(deletedUser);
    }
    getUserByIdController(req, res) {
        const id = Number(req.params.id);
        const foundUser = this.services.getUserByIdUseCase.execute(id);
        return res.send(foundUser);
    }
    getUserByNameController(req, res) {
        const name = req.params.name;
        const foundUser = this.services.getUserByNameUseCase.execute(name);
        return res.send(foundUser);
    }
    updateUserController(req, res) {
        const id = Number(req.params.id);
        const body = req.body;
        const updatedUser = this.services.updateUserUseCase.execute(id, body);
        return res.send(updatedUser);
    }
}
exports.UserController = UserController;
