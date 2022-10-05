import { CustomerInterface } from "../entities.interfaces/customer.interface";

export interface CustomerControllerInterface {
  createCustomerController(
    req: { body: CustomerInterface },
    res: any
  ): { message: string };

  deleteCustomerController(
    req: { params: { id: string } },
    res: any
  ): { message: string };

  getCustomerByIdController(
    req: { params: { id: string } },
    res: any
  ): CustomerInterface[];

  getCustomerByNameController(
    req: { params: { name: string } },
    res: any
  ): CustomerInterface[];

  updateCustomerController(
    req: { params: { id: string }; body: CustomerInterface },
    res: any
  ): { message: string };
}
