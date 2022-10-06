"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCustomerUseCase = void 0;
class DeleteCustomerUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(customerId) {
        return new Promise((resolve) => {
            const deletedCustomer = this.repository.deleteCustomer(customerId);
            resolve(deletedCustomer);
        });
    }
}
exports.DeleteCustomerUseCase = DeleteCustomerUseCase;
