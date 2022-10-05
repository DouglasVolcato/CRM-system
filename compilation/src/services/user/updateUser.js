"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserUseCase = void 0;
class UpdateUserUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(userId, userBody) {
        return this.repository.updateUser(userId, userBody);
    }
}
exports.UpdateUserUseCase = UpdateUserUseCase;
