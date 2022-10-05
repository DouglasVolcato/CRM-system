"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCustomerByIdUseCase = void 0;
class GetCustomerByIdUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(customerId) {
        return this.repository.getCustomerById(customerId);
    }
}
exports.GetCustomerByIdUseCase = GetCustomerByIdUseCase;
