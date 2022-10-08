"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const user_1 = require("../mocks/user");
class UserRepository {
    createUser(userBody) {
        return new Promise((resolve) => {
            user_1.users.push(userBody);
            resolve(userBody);
        });
    }
    getAllUsers() {
        return new Promise((resolve) => {
            resolve(user_1.users);
        });
    }
    getUserByName(userName) {
        return new Promise((resolve) => {
            const foundUser = user_1.users.filter((user) => user.name.includes(userName));
            resolve(foundUser);
        });
    }
    getUserById(userId) {
        return new Promise((resolve) => {
            const foundUser = user_1.users.filter((user) => user.id === userId);
            resolve(foundUser[0]);
        });
    }
    getUserByEmail(userEmail) {
        return new Promise((resolve) => {
            const foundUser = user_1.users.filter((user) => user.email === userEmail);
            resolve(foundUser[0]);
        });
    }
    deleteUser(userId) {
        return new Promise((resolve) => {
            const foundUser = [];
            user_1.users.map((user, index) => {
                if (user.id === userId) {
                    foundUser.push(user);
                    user_1.users.splice(index, 1);
                }
            });
            resolve(foundUser[0]);
        });
    }
    updateUser(userId, userBody) {
        return new Promise((resolve) => {
            const foundUser = [];
            user_1.users.map((user, index) => {
                if (user.id === userId) {
                    foundUser.push(userBody);
                    user_1.users.splice(index, 1, userBody);
                }
            });
            resolve(foundUser[0]);
        });
    }
}
exports.UserRepository = UserRepository;
