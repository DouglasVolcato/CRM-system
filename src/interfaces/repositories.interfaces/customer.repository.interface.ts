import { CustomerInterface } from "../entities.interfaces/customer.interface";

export interface CustomerRepositoryInterface {
  createCustomer(
    customerBody: CustomerInterface
  ): Promise<unknown> | CustomerInterface;

  getAllCustomers(): Promise<unknown> | CustomerInterface[];

  getCustomerByName(
    customerName: string
  ): Promise<unknown> | CustomerInterface[];

  getCustomerById(customerId: string): Promise<unknown> | CustomerInterface;

  deleteCustomer(customerId: string): Promise<unknown> | CustomerInterface;

  updateCustomer(
    customerId: string,
    customerBody: CustomerInterface
  ): Promise<unknown> | CustomerInterface;
}
