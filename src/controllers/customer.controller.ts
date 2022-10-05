import { CustomerServicesInterface } from "../interfaces/services.interfaces/customer.services.interface";
import { CustomerInterface } from "../interfaces/entities.interfaces/customer.interface";

export class CustomerController {
  services: CustomerServicesInterface;

  constructor(services: CustomerServicesInterface) {
    this.services = services;
  }

  createCustomerController(req: { body: CustomerInterface }, res: any) {
    const body = req.body;
    const newCustomer = this.services.createCustomerUseCase.execute(body);
    return res.send(newCustomer);
  }

  deleteCustomerController(req: { params: { id: string } }, res: any) {
    const id = Number(req.params.id);
    const deletedCustomer = this.services.deleteCustomerUseCase.execute(id);
    return res.send(deletedCustomer);
  }

  getCustomerByIdController(req: { params: { id: string } }, res: any) {
    const id = Number(req.params.id);
    const foundCustomer = this.services.getCustomerByIdUseCase.execute(id);
    return res.send(foundCustomer);
  }

  getCustomerByNameController(req: { params: { name: string } }, res: any) {
    const name = req.params.name;
    const foundCustomer = this.services.getCustomerByNameUseCase.execute(name);
    return res.send(foundCustomer);
  }

  updateCustomerController(
    req: { params: { id: string }; body: CustomerInterface },
    res: any
  ) {
    const id = Number(req.params.id);
    const body = req.body;
    const updatedCustomer = this.services.updateCustomerUseCase.execute(
      id,
      body
    );
    return res.send(updatedCustomer);
  }
}
