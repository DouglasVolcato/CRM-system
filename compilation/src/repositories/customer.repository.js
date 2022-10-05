"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRepository = void 0;
const customers_1 = require("../mocks/customers");
class CustomerRepository {
    static createCustomer(customerBody) {
        customers_1.customers.push(customerBody);
        return { message: "Customer created." };
    }
    static getCustomerByName(customerName) {
        return customers_1.customers.filter((customer) => customer.name === customerName);
    }
    static getCustomerById(customerId) {
        return customers_1.customers.filter((customer) => customer.id === customerId);
    }
    static deleteCustomer(customerId) {
        customers_1.customers.map((customer, index) => {
            if (customer.id === customerId) {
                customers_1.customers.splice(index, 1);
            }
        });
        return { message: "Customer deleted." };
    }
    static updateCustomer(customerId, customerBody) {
        customers_1.customers.map((customer, index) => {
            if (customer.id === customerId) {
                customers_1.customers.splice(index, 1, customerBody);
            }
        });
        return { message: "Customer updated." };
    }
}
exports.CustomerRepository = CustomerRepository;
