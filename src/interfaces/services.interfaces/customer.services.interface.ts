import { CustomerInterface } from "../entities.interfaces/customer.interface";

export interface CustomerServicesInterface {
  createCustomerUseCase: {
    execute(customerBody: CustomerInterface): { message: string };
  };

  deleteCustomerUseCase: {
    execute(customerId: number): { message: string };
  };

  getCustomerByIdUseCase: {
    execute(customerId: number): CustomerInterface[];
  };

  getCustomerByNameUseCase: {
    execute(customerName: string): CustomerInterface[];
  };

  updateCustomerUseCase: {
    execute(
      customerId: number,
      customerBody: CustomerInterface
    ): { message: string };
  };
}
