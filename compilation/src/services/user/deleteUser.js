"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserUsecase = void 0;
class DeleteUserUsecase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(userId) {
        return this.repository.deleteUser(userId);
    }
}
exports.DeleteUserUsecase = DeleteUserUsecase;
