"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserUsecase = void 0;
class DeleteUserUsecase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(userId) {
        return new Promise((resolve) => {
            const deletedUser = this.repository.deleteUser(userId);
            resolve(deletedUser);
        });
    }
}
exports.DeleteUserUsecase = DeleteUserUsecase;
