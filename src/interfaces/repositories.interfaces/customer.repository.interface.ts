import { CustomerInterface } from "../entities.interfaces/customer.interface";

export interface CustomerRepositoryInterface {
  createCustomer(customerBody: CustomerInterface): { message: string };

  getCustomerByName(customerName: string): CustomerInterface[];

  getCustomerById(customerId: number): CustomerInterface[];

  deleteCustomer(customerId: number): { message: string };

  updateCustomer(
    customerId: number,
    customerBody: CustomerInterface
  ): { message: string };
}
