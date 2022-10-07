"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCustomerUseCase = void 0;
class GetAllCustomerUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute() {
        return new Promise((resolve) => {
            const foundCustomers = this.repository.getAllCustomers();
            resolve(foundCustomers);
        });
    }
}
exports.GetAllCustomerUseCase = GetAllCustomerUseCase;
