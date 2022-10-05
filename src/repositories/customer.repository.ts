import { CustomerInterface } from "../interfaces/entities.interfaces/customer.interface";
import { customers } from "../mocks/customers";

export class CustomerRepository {
  static createCustomer(customerBody: CustomerInterface) {
    customers.push(customerBody);
    return { message: "Customer created." };
  }

  static getCustomerByName(customerName: string) {
    return customers.filter((customer) => customer.name === customerName);
  }

  static getCustomerById(customerId: number) {
    return customers.filter((customer) => customer.id === customerId);
  }

  static deleteCustomer(customerId: number) {
    customers.map((customer, index) => {
      if (customer.id === customerId) {
        customers.splice(index, 1);
      }
    });
    return { message: "Customer deleted." };
  }

  static updateCustomer(customerId: number, customerBody: CustomerInterface) {
    customers.map((customer, index) => {
      if (customer.id === customerId) {
        customers.splice(index, 1, customerBody);
      }
    });
    return { message: "Customer updated." };
  }
}
