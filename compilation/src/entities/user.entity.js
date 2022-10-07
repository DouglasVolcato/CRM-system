"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const idGenerator_1 = require("../helpers/idGenerator");
const cryptography_1 = require("../helpers/cryptography");
class User {
    constructor(userBody) {
        this.id = (0, idGenerator_1.generateId)();
        this.name = userBody.name;
        this.username = userBody.username;
        this.email = userBody.email;
        this.password = userBody.password;
    }
    validate() {
        if (!this.name ||
            !this.id ||
            !this.username ||
            !this.email ||
            !this.password) {
            throw new Error("Missing fields for user creation.");
        }
    }
    getUser() {
        return {
            id: this.id,
            name: this.name,
            username: this.username,
            email: this.email,
            password: cryptography_1.cryptography.encryptPassword(this.password),
        };
    }
}
exports.User = User;
