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
exports.AuthController = void 0;
const statusCodeGenerator_1 = require("../helpers/statusCodeGenerator");
class AuthController {
    constructor(services) {
        this.services = services;
    }
    loginController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk.toString();
            });
            return req.on("end", () => __awaiter(this, void 0, void 0, function* () {
                try {
                    const { email, password } = yield JSON.parse(body);
                    yield this.services.comparePasswordUseCase.execute(password, email);
                    const generatedToken = this.services.generateTokenUseCase.execute(email);
                    res.writeHead(201, { "Content-Type": "application/json" });
                    return res.end(JSON.stringify({ token: generatedToken }));
                }
                catch (err) {
                    res.writeHead((0, statusCodeGenerator_1.statusCodeGenerator)(err), {
                        "Content-Type": "application/json",
                    });
                    return res.end(JSON.stringify({ Message: "Error in login: " + err }));
                }
            }));
        });
    }
}
exports.AuthController = AuthController;
