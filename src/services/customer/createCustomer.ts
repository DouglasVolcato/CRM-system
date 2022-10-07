import { CustomerRepositoryInterface } from "../../interfaces/repositories.interfaces/customer.repository.interface";
import { CustomerInterface } from "../../interfaces/entities.interfaces/customer.interface";
import { Customer } from "../../entities/customer.entity";

export class CreateCustomerUseCase {
  repository: CustomerRepositoryInterface;

  constructor(repository: CustomerRepositoryInterface) {
    this.repository = repository;
  }

  async execute(customerBody: CustomerInterface) {
    const body = new Customer(customerBody);
    body.validate();
    const createCustomer = await this.repository.createCustomer(
      body.getCustomer()
    );
    return createCustomer;
  }
}
