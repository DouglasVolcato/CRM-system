"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByEmailUseCase = void 0;
class GetUserByEmailUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(userEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundUser = yield this.repository.getUserByEmail(userEmail);
            if (foundUser === undefined) {
                throw new Error("User not found.");
            }
            return foundUser;
        });
    }
}
exports.GetUserByEmailUseCase = GetUserByEmailUseCase;
