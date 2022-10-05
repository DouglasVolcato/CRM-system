import { CustomerInterface } from "../entities.interfaces/customer.interface";
export interface CustomerServicesInterface {
  CreateCustomerUseCase: {
    execute(customerBody: CustomerInterface): { message: string };
  };

  DeleteCustomerUseCase: {
    execute(customerId: number): { message: string };
  };

  GetCustomerByIdUseCase: {
    execute(customerId: number): CustomerInterface[];
  };

  GetCustomerByNameUseCase: {
    execute(customerName: string): CustomerInterface[];
  };

  UpdateCustomerUseCase: {
    execute(
      customerId: number,
      customerBody: CustomerInterface
    ): { message: string };
  };
}
