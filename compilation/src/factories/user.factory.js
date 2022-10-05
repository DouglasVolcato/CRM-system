"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUserFactory = void 0;
const user_controller_1 = require("../controllers/user.controller");
const user_repository_1 = require("../repositories/user.repository");
const user_routes_1 = require("../routes/user.routes");
const services = __importStar(require("../services/user.services.index"));
function makeUserFactory(router) {
    const userRepository = new user_repository_1.UserRepository();
    const createUserUsecase = new services.CreateUserUsecase(userRepository);
    const deleteUserUsecase = new services.DeleteUserUsecase(userRepository);
    const getUserByIdUseCase = new services.GetUserByIdUseCase(userRepository);
    const getUserByNameUseCase = new services.GetUserByNameUseCase(userRepository);
    const updateUserUseCase = new services.UpdateUserUseCase(userRepository);
    const userController = new user_controller_1.UserController({
        createUserUsecase,
        deleteUserUsecase,
        getUserByIdUseCase,
        getUserByNameUseCase,
        updateUserUseCase,
    });
    const userRoutes = new user_routes_1.UserRoutes(userController, router);
    return userRoutes;
}
exports.makeUserFactory = makeUserFactory;
