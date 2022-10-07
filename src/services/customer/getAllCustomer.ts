import { CustomerRepositoryInterface } from "../../interfaces/repositories.interfaces/customer.repository.interface";

export class GetAllCustomerUseCase {
  repository: CustomerRepositoryInterface;

  constructor(repository: CustomerRepositoryInterface) {
    this.repository = repository;
  }

  execute() {
    return new Promise((resolve) => {
      const foundCustomers = this.repository.getAllCustomers();
      resolve(foundCustomers);
    });
  }
}
