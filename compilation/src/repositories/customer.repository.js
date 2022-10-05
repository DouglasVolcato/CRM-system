"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRepository = void 0;
const customers_1 = require("../mocks/customers");
class CustomerRepository {
    createCustomer(customerBody) {
        customers_1.customers.push(customerBody);
        return { message: "Customer created." };
    }
    getCustomerByName(customerName) {
        return customers_1.customers.filter((customer) => customer.name === customerName);
    }
    getCustomerById(customerId) {
        return customers_1.customers.filter((customer) => customer.id === customerId);
    }
    deleteCustomer(customerId) {
        customers_1.customers.map((customer, index) => {
            if (customer.id === customerId) {
                customers_1.customers.splice(index, 1);
            }
        });
        return { message: "Customer deleted." };
    }
    updateCustomer(customerId, customerBody) {
        customers_1.customers.map((customer, index) => {
            if (customer.id === customerId) {
                customers_1.customers.splice(index, 1, customerBody);
            }
        });
        return { message: "Customer updated." };
    }
}
exports.CustomerRepository = CustomerRepository;
