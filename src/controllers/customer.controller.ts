import { CustomerServicesInterface } from "../interfaces/services.interfaces/customer.services.interface";
import { CustomerInterface } from "../interfaces/entities.interfaces/customer.interface";

export class CustomerController {
  services: CustomerServicesInterface;

  constructor(services: CustomerServicesInterface) {
    this.services = services;
  }

  createUserController(req: { body: CustomerInterface }, res: any) {
    const body = req.body;
    const newCustomer = this.services.CreateCustomerUseCase.execute(body);
    res.send(newCustomer);
  }

  deleteUserController(req: { params: { id: string } }, res: any) {
    const id = Number(req.params.id);
    const deletedCustomer = this.services.DeleteCustomerUseCase.execute(id);
    res.send(deletedCustomer);
  }

  getUserByIdController(req: { params: { id: string } }, res: any) {
    const id = Number(req.params.id);
    const foundCustomer = this.services.GetCustomerByIdUseCase.execute(id);
    res.send(foundCustomer);
  }

  getUserByNameController(req: { params: { name: string } }, res: any) {
    const name = req.params.name;
    const foundCustomer = this.services.GetCustomerByNameUseCase.execute(name);
    res.send(foundCustomer);
  }

  updateUserController(
    req: { params: { id: string }; body: CustomerInterface },
    res: any
  ) {
    const id = Number(req.params.id);
    const body = req.body;
    const updatedCustomer = this.services.UpdateCustomerUseCase.execute(
      id,
      body
    );
    res.send(updatedCustomer);
  }
}
