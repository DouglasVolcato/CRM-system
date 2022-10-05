"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerUseCase = void 0;
class UpdateCustomerUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(customerId, customerBody) {
        return this.repository.updateCustomer(customerId, customerBody);
    }
}
exports.UpdateCustomerUseCase = UpdateCustomerUseCase;
