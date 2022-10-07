import { CustomerInterface } from "../../interfaces/entities.interfaces/customer.interface";
import { CustomerRepositoryInterface } from "../../interfaces/repositories.interfaces/customer.repository.interface";

export class UpdateCustomerUseCase {
  repository: CustomerRepositoryInterface;

  constructor(repository: CustomerRepositoryInterface) {
    this.repository = repository;
  }

  async execute(customerId: string, customerBody: CustomerInterface) {
    const foundCustomer: any = await this.repository.getCustomerById(
      customerId
    );

    if (foundCustomer === undefined) {
      throw new Error("Customer not found.");
    }

    const body = {
      id: foundCustomer.id,
      name: customerBody.name ?? foundCustomer.name,
      age: customerBody.age ?? foundCustomer.age,
      phone: customerBody.phone ?? foundCustomer.phone,
      city: customerBody.city ?? foundCustomer.city,
      notes: customerBody.notes ?? foundCustomer.notes,
    };

    const updatedCustomer = await this.repository.updateCustomer(
      customerId,
      body
    );
    return updatedCustomer;
  }
}
