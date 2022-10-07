import { CustomerInterface } from "../entities.interfaces/customer.interface";

export interface CustomerRepositoryInterface {
  createCustomer(
    customerBody: CustomerInterface
  ): Promise<unknown> | CustomerInterface;

  getAllCustomers(): Promise<unknown> | CustomerInterface[];

  getCustomerByName(
    customerName: string
  ): Promise<unknown> | CustomerInterface[];

  getCustomerById(customerId: number): Promise<unknown> | CustomerInterface;

  deleteCustomer(customerId: number): Promise<unknown> | CustomerInterface;

  updateCustomer(
    customerId: number,
    customerBody: CustomerInterface
  ): Promise<unknown> | CustomerInterface;
}
