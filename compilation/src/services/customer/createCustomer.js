"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerUseCase = void 0;
class CreateCustomerUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(customerBody) {
        return this.repository.createCustomer(customerBody);
    }
}
exports.CreateCustomerUseCase = CreateCustomerUseCase;
