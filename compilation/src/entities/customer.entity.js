"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(userBody) {
        this.id = userBody.id;
        this.name = userBody.name;
        this.age = userBody.age;
        this.phone = userBody.phone;
        this.city = userBody.city;
        this.notes = userBody.notes;
    }
    validate() {
        if (!this.name || !this.id) {
            throw new Error("Missing fields for customer creation.");
        }
    }
    getCustomer() {
        var _a, _b, _c, _d;
        return {
            id: this.id,
            name: this.name,
            age: (_a = this.age) !== null && _a !== void 0 ? _a : null,
            phone: (_b = this.phone) !== null && _b !== void 0 ? _b : null,
            city: (_c = this.city) !== null && _c !== void 0 ? _c : null,
            notes: (_d = this.notes) !== null && _d !== void 0 ? _d : null,
        };
    }
}
exports.Customer = Customer;
