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
exports.UpdateUserUseCase = void 0;
const cryptography_1 = require("../../helpers/cryptography");
class UpdateUserUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(userId, userBody) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const foundUser = yield this.repository.getUserById(userId);
            const body = {
                id: foundUser.id,
                name: (_a = userBody.name) !== null && _a !== void 0 ? _a : foundUser.name,
                username: (_b = userBody.username) !== null && _b !== void 0 ? _b : foundUser.username,
                email: (_c = userBody.email) !== null && _c !== void 0 ? _c : foundUser.email,
                password: userBody.password
                    ? cryptography_1.cryptography.encryptPassword(userBody.password)
                    : foundUser.password,
            };
            const updatedUser = yield this.repository.updateUser(userId, body);
            return updatedUser;
        });
    }
}
exports.UpdateUserUseCase = UpdateUserUseCase;
