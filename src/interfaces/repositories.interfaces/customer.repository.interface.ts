import { CustomerInterface } from "../entities.interfaces/customer.interface";

export interface CustomerRepositoryInterface {
  createCustomer(customerBody: CustomerInterface): Promise<CustomerInterface>;

  getAllCustomers(): Promise<CustomerInterface[]>;

  getCustomerByName(customerName: string): Promise<CustomerInterface[]>;

  getCustomerById(customerId: string): Promise<CustomerInterface>;

  deleteCustomer(customerId: string): Promise<CustomerInterface>;

  updateCustomer(
    customerId: string,
    customerBody: CustomerInterface
  ): Promise<CustomerInterface>;
}
