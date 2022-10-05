"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUsecase = void 0;
class CreateUserUsecase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(userBody) {
        return this.repository.createUser(userBody);
    }
}
exports.CreateUserUsecase = CreateUserUsecase;
