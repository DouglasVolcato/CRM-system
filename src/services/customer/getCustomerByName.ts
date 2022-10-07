import { CustomerRepositoryInterface } from "../../interfaces/repositories.interfaces/customer.repository.interface";

export class GetCustomerByNameUseCase {
  repository: CustomerRepositoryInterface;

  constructor(repository: CustomerRepositoryInterface) {
    this.repository = repository;
  }

  async execute(customerName: string) {
    const foundCustomer = await this.repository.getCustomerByName(customerName);
    return foundCustomer;
  }
}
