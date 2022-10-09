"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateTokenUseCase = void 0;
const cryptography_1 = require("../../helpers/cryptography");
class GenerateTokenUseCase {
    execute(userEmail) {
        return cryptography_1.cryptography.generateToken(userEmail);
    }
}
exports.GenerateTokenUseCase = GenerateTokenUseCase;
