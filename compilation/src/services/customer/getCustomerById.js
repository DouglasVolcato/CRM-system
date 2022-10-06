"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCustomerByIdUseCase = void 0;
class GetCustomerByIdUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(customerId) {
        return new Promise((resolve) => {
            const foundCustomer = this.repository.getCustomerById(customerId);
            resolve(foundCustomer);
        });
    }
}
exports.GetCustomerByIdUseCase = GetCustomerByIdUseCase;
