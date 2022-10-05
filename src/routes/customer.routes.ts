import { CustomerControllerInterface } from "../interfaces/controllers.interfaces/customer.controller.interface";
import { CustomerInterface } from "../interfaces/entities.interfaces/customer.interface";

export class CustomerRoutes {
  controller: CustomerControllerInterface;
  router: any;

  constructor(controller: CustomerControllerInterface, router: any) {
    this.controller = controller;
    this.router = router;
  }

  route() {
    this.router.post(
      "/create-customer",
      (req: { body: CustomerInterface }, res: any) =>
        this.controller.createCustomerController(req, res)
    );

    this.router.delete(
      "/delete-customer/:id",
      (req: { params: { id: string } }, res: any) =>
        this.controller.deleteCustomerController(req, res)
    );

    this.router.get(
      "/get-customer-by-id/:id",
      (req: { params: { id: string } }, res: any) =>
        this.controller.getCustomerByIdController(req, res)
    );

    this.router.get(
      "/get-customer-by-name/:name",
      (req: { params: { name: string } }, res: any) =>
        this.controller.getCustomerByNameController(req, res)
    );

    this.router.put(
      "/update-customer/:id",
      (req: { params: { id: string }; body: CustomerInterface }, res: any) =>
        this.controller.updateCustomerController(req, res)
    );
  }
}
