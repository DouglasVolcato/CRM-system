import { CustomerRepositoryInterface } from "../../interfaces/repositories.interfaces/customer.repository.interface";

export class GetAllCustomerUseCase {
  repository: CustomerRepositoryInterface;

  constructor(repository: CustomerRepositoryInterface) {
    this.repository = repository;
  }

  async execute() {
    const foundCustomers = await this.repository.getAllCustomers();
    return foundCustomers;
  }
}
