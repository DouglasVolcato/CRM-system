import { CustomerInterface } from "../interfaces/entities.interfaces/customer.interface";
import { customers } from "../mocks/customers";

export class CustomerRepository {
  createCustomer(customerBody: CustomerInterface) {
    return new Promise((resolve) => {
      customers.push(customerBody);
      resolve(customerBody);
    });
  }

  getAllCustomers() {
    return new Promise((resolve) => {
      resolve(customers);
    });
  }

  getCustomerByName(customerName: string) {
    return new Promise((resolve) => {
      const foundCustomer = customers.filter((customer: CustomerInterface) =>
        customer.name.includes(customerName)
      );
      resolve(foundCustomer);
    });
  }

  getCustomerById(customerId: string) {
    return new Promise((resolve) => {
      const foundCustomer = customers.filter(
        (customer: CustomerInterface) => customer.id === customerId
      );
      resolve(foundCustomer[0]);
    });
  }

  deleteCustomer(customerId: string) {
    return new Promise((resolve) => {
      const foundCustomer: CustomerInterface[] = [];
      customers.map((customer: CustomerInterface, index: number) => {
        if (customer.id === customerId) {
          foundCustomer.push(customer);
          customers.splice(index, 1);
        }
      });
      resolve(foundCustomer[0]);
    });
  }

  updateCustomer(customerId: string, customerBody: CustomerInterface) {
    return new Promise((resolve) => {
      const foundCustomer: CustomerInterface[] = [];
      customers.map((customer: CustomerInterface, index: number) => {
        if (customer.id === customerId) {
          foundCustomer.push(customerBody);
          customers.splice(index, 1, customerBody);
        }
      });
      resolve(foundCustomer[0]);
    });
  }
}
