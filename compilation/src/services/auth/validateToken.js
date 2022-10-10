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
exports.ValidateTokenUseCase = void 0;
const cryptography_1 = require("../../helpers/cryptography");
const user_1 = require("../../mocks/user");
class ValidateTokenUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(userToken) {
        return __awaiter(this, void 0, void 0, function* () {
            if (userToken.split(" ")[0] !== "Bearer") {
                return false;
            }
            const token = userToken.replace("Bearer ", "");
            for (let user of user_1.users) {
                if (cryptography_1.cryptography.generateToken(user.email) === token) {
                    return true;
                }
            }
            return false;
        });
    }
}
exports.ValidateTokenUseCase = ValidateTokenUseCase;
