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
exports.ComparePasswordUseCase = void 0;
const cryptography_1 = require("../../helpers/cryptography");
class ComparePasswordUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(userPassword, userEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundUser = yield this.repository.getUserByEmail(userEmail);
            if (!foundUser) {
                throw new Error("User not found.");
            }
            const result = cryptography_1.cryptography.comparePassword(userPassword, foundUser.password);
            if (result === false) {
                throw new Error("Invalid password.");
            }
            return result;
        });
    }
}
exports.ComparePasswordUseCase = ComparePasswordUseCase;
