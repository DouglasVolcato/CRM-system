"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByNameUseCase = void 0;
class GetUserByNameUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(userName) {
        return this.repository.getUserByName(userName);
    }
}
exports.GetUserByNameUseCase = GetUserByNameUseCase;
