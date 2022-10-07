"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const idGenerator_1 = require("../helpers/idGenerator");
class Customer {
    constructor(userBody) {
        var _a, _b, _c, _d;
        this.id = (0, idGenerator_1.generateId)();
        this.name = userBody.name;
        this.age = (_a = userBody.age) !== null && _a !== void 0 ? _a : undefined;
        this.phone = (_b = userBody.phone) !== null && _b !== void 0 ? _b : undefined;
        this.city = (_c = userBody.city) !== null && _c !== void 0 ? _c : "";
        this.notes = (_d = userBody.notes) !== null && _d !== void 0 ? _d : "";
    }
    validate() {
        if (!this.name) {
            throw new Error("Missing name in customer creation.");
        }
    }
    getCustomer() {
        return {
            id: this.id,
            name: this.name,
            age: this.age,
            phone: this.phone,
            city: this.city,
            notes: this.notes,
        };
    }
}
exports.Customer = Customer;
