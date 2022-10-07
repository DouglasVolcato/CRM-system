"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRepository = void 0;
const customers_1 = require("../mocks/customers");
class CustomerRepository {
    createCustomer(customerBody) {
        return new Promise((resolve) => {
            customers_1.customers.push(customerBody);
            resolve(customerBody);
        });
    }
    getAllCustomers() {
        return new Promise((resolve) => {
            resolve(customers_1.customers);
        });
    }
    getCustomerByName(customerName) {
        return new Promise((resolve) => {
            const foundCustomer = customers_1.customers.filter((customer) => customer.name.includes(customerName));
            resolve(foundCustomer);
        });
    }
    getCustomerById(customerId) {
        return new Promise((resolve) => {
            const foundCustomer = customers_1.customers.filter((customer) => customer.id === customerId);
            resolve(foundCustomer[0]);
        });
    }
    deleteCustomer(customerId) {
        return new Promise((resolve) => {
            const foundCustomer = [];
            customers_1.customers.map((customer, index) => {
                if (customer.id === customerId) {
                    foundCustomer.push(customer);
                    customers_1.customers.splice(index, 1);
                }
            });
            resolve(foundCustomer[0]);
        });
    }
    updateCustomer(customerId, customerBody) {
        return new Promise((resolve) => {
            const foundCustomer = [];
            customers_1.customers.map((customer, index, number) => {
                if (customer.id === customerId) {
                    foundCustomer.push(customer);
                    customers_1.customers.splice(index, 1, customerBody);
                }
            });
            resolve(foundCustomer[0]);
        });
    }
}
exports.CustomerRepository = CustomerRepository;
