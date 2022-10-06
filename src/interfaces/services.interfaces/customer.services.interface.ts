import { CustomerInterface } from "../entities.interfaces/customer.interface";

export interface CustomerServicesInterface {
  createCustomerUseCase: {
    execute(
      customerBody: CustomerInterface
    ): Promise<unknown> | { message: string };
  };

  deleteCustomerUseCase: {
    execute(customerId: number): Promise<unknown> | { message: string };
  };

  getCustomerByIdUseCase: {
    execute(customerId: number): Promise<unknown> | CustomerInterface[];
  };

  getCustomerByNameUseCase: {
    execute(customerName: string): Promise<unknown> | CustomerInterface[];
  };

  updateCustomerUseCase: {
    execute(
      customerId: number,
      customerBody: CustomerInterface
    ): Promise<unknown> | { message: string };
  };
}
