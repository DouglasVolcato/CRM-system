import { CustomerRepositoryInterface } from "../../interfaces/repositories.interfaces/customer.repository.interface";
import { CustomerInterface } from "../../interfaces/entities.interfaces/customer.interface";

export class CreateCustomerUseCase {
  repository: CustomerRepositoryInterface;

  constructor(repository: CustomerRepositoryInterface) {
    this.repository = repository;
  }

  execute(customerBody: CustomerInterface) {
    return this.repository.createCustomer(customerBody);
  }
}