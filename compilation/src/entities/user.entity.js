"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(userBody) {
        this.id = userBody.id;
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
            password: this.password,
        };
    }
}
exports.User = User;
