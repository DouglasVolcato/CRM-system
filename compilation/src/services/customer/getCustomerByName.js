"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCustomerByNameUseCase = void 0;
class GetCustomerByNameUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(customerName) {
        return new Promise((resolve) => {
            const foundCustomer = this.repository.getCustomerByName(customerName);
            resolve(foundCustomer);
        });
    }
}
exports.GetCustomerByNameUseCase = GetCustomerByNameUseCase;
