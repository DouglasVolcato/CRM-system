import { CustomerRepositoryInterface } from "../../interfaces/repositories.interfaces/customer.repository.interface";

export class GetCustomerByIdUseCase {
  repository: CustomerRepositoryInterface;

  constructor(repository: CustomerRepositoryInterface) {
    this.repository = repository;
  }

  execute(customerId: number) {
    return new Promise((resolve) => {
      const foundCustomer = this.repository.getCustomerById(customerId);
      resolve(foundCustomer);
    });
  }
}
