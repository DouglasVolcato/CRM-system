"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByNameUseCase = void 0;
class GetUserByNameUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(userName) {
        return new Promise((resolve) => {
            const foundUser = this.repository.getUserByName(userName);
            resolve(foundUser);
        });
    }
}
exports.GetUserByNameUseCase = GetUserByNameUseCase;
