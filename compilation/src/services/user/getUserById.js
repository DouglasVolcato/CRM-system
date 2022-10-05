"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByIdUseCase = void 0;
class GetUserByIdUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(userId) {
        return this.repository.getUserById(userId);
    }
}
exports.GetUserByIdUseCase = GetUserByIdUseCase;
