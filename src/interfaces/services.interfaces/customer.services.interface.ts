import { CustomerInterface } from "../entities.interfaces/customer.interface";

export interface CustomerServicesInterface {
  createCustomerUseCase: {
    execute(customerBody: CustomerInterface): Promise<CustomerInterface>;
  };

  deleteCustomerUseCase: {
    execute(customerId: string): Promise<CustomerInterface>;
  };

  getAllCustomerUseCase: {
    execute(): Promise<CustomerInterface[]>;
  };

  getCustomerByIdUseCase: {
    execute(customerId: string): Promise<CustomerInterface>;
  };

  getCustomerByNameUseCase: {
    execute(customerName: string): Promise<CustomerInterface[]>;
  };

  updateCustomerUseCase: {
    execute(
      customerId: string,
      customerBody: CustomerInterface
    ): Promise<CustomerInterface>;
  };
}
