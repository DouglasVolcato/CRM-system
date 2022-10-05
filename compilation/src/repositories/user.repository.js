"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const user_1 = require("../mocks/user");
class UserRepository {
    static createUser(userBody) {
        user_1.users.push(userBody);
        return { message: "User created." };
    }
    static getUserByName(userName) {
        return user_1.users.filter((user) => user.name === userName);
    }
    static getUserById(userId) {
        return user_1.users.filter((user) => user.id === userId);
    }
    static deleteUser(userId) {
        user_1.users.map((user, index) => {
            if (user.id === userId) {
                user_1.users.splice(index, 1);
            }
        });
        return { message: "User deleted." };
    }
    static updateUser(userId, userBody) {
        user_1.users.map((user, index) => {
            if (user.id === userId) {
                user_1.users.splice(index, 1, userBody);
            }
        });
        return { message: "User updated." };
    }
}
exports.UserRepository = UserRepository;
