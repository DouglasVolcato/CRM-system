"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByIdUseCase = void 0;
class GetUserByIdUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(userId) {
        return new Promise((resolve) => {
            const foundUser = this.repository.getUserById(userId);
            resolve(foundUser);
        });
    }
}
exports.GetUserByIdUseCase = GetUserByIdUseCase;
