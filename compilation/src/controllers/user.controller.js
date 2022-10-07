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
exports.UserController = void 0;
class UserController {
    constructor(services) {
        this.services = services;
    }
    createUserController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk.toString();
            });
            return req.on("end", () => __awaiter(this, void 0, void 0, function* () {
                const { id, name, username, email, password } = yield JSON.parse(body);
                const userObj = {
                    id,
                    name,
                    username,
                    email,
                    password,
                };
                const newUser = yield this.services.createUserUsecase.execute(userObj);
                res.writeHead(200, { "Content-Type": "application/json" });
                return res.end(JSON.stringify(newUser));
            }));
        });
    }
    deleteUserController(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const id = (_a = req.url) === null || _a === void 0 ? void 0 : _a.replace("/users/delete-user/", "");
            if (id) {
                const deletedUser = yield this.services.deleteUserUsecase.execute(id);
                res.writeHead(200, { "Content-Type": "application/json" });
                return res.end(JSON.stringify(deletedUser));
            }
            else {
                res.writeHead(400, { "Content-Type": "application/json" });
                return res.end({ message: "Invalid url." });
            }
        });
    }
    getAllUsersController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundUsers = yield this.services.getAllUserUseCase.execute();
            res.writeHead(200, { "Content-Type": "application/json" });
            return res.end(JSON.stringify(foundUsers));
        });
    }
    getUserByIdController(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const id = (_a = req.url) === null || _a === void 0 ? void 0 : _a.replace("/users/find-user-by-id/", "");
            if (id) {
                const foundUser = yield this.services.getUserByIdUseCase.execute(id);
                res.writeHead(200, { "Content-Type": "application/json" });
                return res.end(JSON.stringify(foundUser));
            }
            res.writeHead(400, { "Content-Type": "application/json" });
            return res.end({ message: "Invalid url." });
        });
    }
    getUserByNameController(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (req.url) {
                const name = (_a = req.url) === null || _a === void 0 ? void 0 : _a.replace("/users/find-users-by-name/", "");
                const foundUser = yield this.services.getUserByNameUseCase.execute(name);
                res.writeHead(200, { "Content-Type": "application/json" });
                return res.end(JSON.stringify(foundUser));
            }
            res.writeHead(400, { "Content-Type": "application/json" });
            return res.end({ message: "Invalid url." });
        });
    }
    updateUserController(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const userId = (_a = req.url) === null || _a === void 0 ? void 0 : _a.replace("/users/update-user/", "");
            let body = "";
            if (userId) {
                req.on("data", (chunk) => {
                    body += chunk.toString();
                });
                return req.on("end", () => __awaiter(this, void 0, void 0, function* () {
                    const { id, name, username, email, password } = yield JSON.parse(body);
                    const userObj = {
                        id,
                        name,
                        username,
                        email,
                        password,
                    };
                    const updatedUser = yield this.services.updateUserUseCase.execute(userId, userObj);
                    res.writeHead(200, { "Content-Type": "application/json" });
                    return res.end(JSON.stringify(updatedUser));
                }));
            }
            res.writeHead(400, { "Content-Type": "application/json" });
            return res.end({ message: "Invalid url." });
        });
    }
}
exports.UserController = UserController;
