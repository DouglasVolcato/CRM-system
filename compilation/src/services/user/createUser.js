"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUsecase = void 0;
class CreateUserUsecase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(userBody) {
        return new Promise((resolve) => {
            const newUser = this.repository.createUser(userBody);
            resolve(newUser);
        });
    }
}
exports.CreateUserUsecase = CreateUserUsecase;
