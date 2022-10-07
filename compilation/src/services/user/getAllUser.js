"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUserUseCase = void 0;
class GetAllUserUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute() {
        return new Promise((resolve) => {
            const foundUsers = this.repository.getAllUsers();
            resolve(foundUsers);
        });
    }
}
exports.GetAllUserUseCase = GetAllUserUseCase;
