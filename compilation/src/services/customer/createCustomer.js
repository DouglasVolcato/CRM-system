"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerUseCase = void 0;
class CreateCustomerUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(customerBody) {
        return new Promise((resolve) => {
            const createCustomer = this.repository.createCustomer(customerBody);
            resolve(createCustomer);
        });
    }
}
exports.CreateCustomerUseCase = CreateCustomerUseCase;
