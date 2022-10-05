"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCustomerUseCase = void 0;
class DeleteCustomerUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(customerId) {
        return this.repository.deleteCustomer(customerId);
    }
}
exports.DeleteCustomerUseCase = DeleteCustomerUseCase;
