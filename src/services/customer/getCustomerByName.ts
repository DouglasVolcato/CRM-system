import { CustomerRepositoryInterface } from "../../interfaces/repositories.interfaces/customer.repository.interface";

export class GetCustomerByNameUseCase {
  repository: CustomerRepositoryInterface;

  constructor(repository: CustomerRepositoryInterface) {
    this.repository = repository;
  }

  execute(customerName: string) {
    return this.repository.getCustomerByName(customerName);
  }
}
