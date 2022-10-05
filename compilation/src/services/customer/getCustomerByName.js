"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCustomerByNameUseCase = void 0;
class GetCustomerByNameUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(customerName) {
        return this.repository.getCustomerByName(customerName);
    }
}
exports.GetCustomerByNameUseCase = GetCustomerByNameUseCase;
