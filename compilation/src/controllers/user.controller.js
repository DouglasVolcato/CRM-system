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
const statusCodeGenerator_1 = require("../helpers/statusCodeGenerator");
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
                try {
                    const { id, name, username, email, password } = yield JSON.parse(body);
                    const userObj = {
                        id,
                        name,
                        username,
                        email,
                        password,
                    };
                    try {
                        yield this.services.getUserByEmailUseCase.execute(email);
                        res.writeHead(400, {
                            "Content-Type": "application/json",
                        });
                        return res.end(JSON.stringify({ Message: "Email already registered." }));
                    }
                    catch (err) {
                        const newUser = yield this.services.createUserUsecase.execute(userObj);
                        res.writeHead(201, { "Content-Type": "application/json" });
                        return res.end(JSON.stringify(newUser));
                    }
                }
                catch (err) {
                    res.writeHead((0, statusCodeGenerator_1.statusCodeGenerator)(err), {
                        "Content-Type": "application/json",
                    });
                    return res.end(JSON.stringify({ Message: "Error creating user: " + err }));
                }
            }));
        });
    }
    deleteUserController(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
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
            }
            catch (err) {
                res.writeHead((0, statusCodeGenerator_1.statusCodeGenerator)(err), {
                    "Content-Type": "application/json",
                });
                return res.end(JSON.stringify({ Message: "Error deleting customer: " + err }));
            }
        });
    }
    getAllUsersController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const foundUsers = yield this.services.getAllUserUseCase.execute();
                res.writeHead(302, { "Content-Type": "application/json" });
                return res.end(JSON.stringify(foundUsers));
            }
            catch (err) {
                res.writeHead((0, statusCodeGenerator_1.statusCodeGenerator)(err), {
                    "Content-Type": "application/json",
                });
                return res.end(JSON.stringify({ Message: "Error finding users: " + err }));
            }
        });
    }
    getUserByIdController(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const id = (_a = req.url) === null || _a === void 0 ? void 0 : _a.replace("/users/find-user-by-id/", "");
            try {
                if (id) {
                    const foundUser = yield this.services.getUserByIdUseCase.execute(id);
                    res.writeHead(302, { "Content-Type": "application/json" });
                    return res.end(JSON.stringify(foundUser));
                }
                res.writeHead(400, { "Content-Type": "application/json" });
                return res.end(JSON.stringify({ message: "Invalid url." }));
            }
            catch (err) {
                res.writeHead((0, statusCodeGenerator_1.statusCodeGenerator)(err), {
                    "Content-Type": "application/json",
                });
                return res.end(JSON.stringify({ message: "Error finding user: " + err }));
            }
        });
    }
    getUserByEmailController(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const email = (_a = req.url) === null || _a === void 0 ? void 0 : _a.replace("/users/find-user-by-email/", "");
            try {
                if (email) {
                    const foundUser = yield this.services.getUserByEmailUseCase.execute(email);
                    res.writeHead(302, { "Content-Type": "application/json" });
                    return res.end(JSON.stringify(foundUser));
                }
                res.writeHead(400, { "Content-Type": "application/json" });
                return res.end(JSON.stringify({ message: "Invalid url." }));
            }
            catch (err) {
                res.writeHead((0, statusCodeGenerator_1.statusCodeGenerator)(err), {
                    "Content-Type": "application/json",
                });
                return res.end(JSON.stringify({ message: "Error finding user: " + err }));
            }
        });
    }
    getUserByNameController(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (req.url) {
                    const name = (_a = req.url) === null || _a === void 0 ? void 0 : _a.replace("/users/find-users-by-name/", "");
                    const foundUser = yield this.services.getUserByNameUseCase.execute(name);
                    res.writeHead(302, { "Content-Type": "application/json" });
                    return res.end(JSON.stringify(foundUser));
                }
                res.writeHead(400, { "Content-Type": "application/json" });
                return res.end(JSON.stringify({ message: "Invalid url." }));
            }
            catch (err) {
                res.writeHead((0, statusCodeGenerator_1.statusCodeGenerator)(err), {
                    "Content-Type": "application/json",
                });
                return res.end(JSON.stringify({ message: "Error finding user: " + err }));
            }
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
                    try {
                        const updatedUser = yield this.services.updateUserUseCase.execute(userId, userObj);
                        res.writeHead(200, { "Content-Type": "application/json" });
                        return res.end(JSON.stringify(updatedUser));
                    }
                    catch (err) {
                        res.writeHead((0, statusCodeGenerator_1.statusCodeGenerator)(err), {
                            "Content-Type": "application/json",
                        });
                        return res.end(JSON.stringify({ Message: "Error updating user: " + err }));
                    }
                }));
            }
            res.writeHead(400, { "Content-Type": "application/json" });
            return res.end(JSON.stringify({ message: "Invalid url." }));
        });
    }
}
exports.UserController = UserController;
