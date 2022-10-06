import { CustomerRepositoryInterface } from "../../interfaces/repositories.interfaces/customer.repository.interface";

export class GetCustomerByNameUseCase {
  repository: CustomerRepositoryInterface;

  constructor(repository: CustomerRepositoryInterface) {
    this.repository = repository;
  }

  execute(customerName: string) {
    return new Promise((resolve) => {
      const foundCustomer = this.repository.getCustomerByName(customerName);
      resolve(foundCustomer);
    });
  }
}
