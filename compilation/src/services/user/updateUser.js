"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserUseCase = void 0;
class UpdateUserUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(userId, userBody) {
        return new Promise((resolve) => {
            const updatedUser = this.repository.updateUser(userId, userBody);
            resolve(updatedUser);
        });
    }
}
exports.UpdateUserUseCase = UpdateUserUseCase;
