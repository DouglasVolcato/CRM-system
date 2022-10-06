import { CustomerControllerInterface } from "../interfaces/controllers.interfaces/customer.controller.interface";
import * as http from "http";

export class CustomerRoutes {
  controller: CustomerControllerInterface;
  router: string;
  req: http.IncomingMessage;
  res: http.ServerResponse;

  constructor(
    controller: CustomerControllerInterface,
    router: string,
    req: http.IncomingMessage,
    res: http.ServerResponse
  ) {
    this.controller = controller;
    this.router = router;
    this.req = req;
    this.res = res;
  }

  route() {
    if (
      this.router === "/customers/create-customer" &&
      this.req.method === "POST"
    ) {
      this.controller.createCustomerController(this.req, this.res);
    } else if (
      this.router.includes("/customers/delete-customer/") &&
      this.req.method === "DELETE"
    ) {
      this.controller.deleteCustomerController(this.req, this.res);
    } else if (
      this.router.includes("/customers/find-customer-by-id/") &&
      this.req.method === "GET"
    ) {
      this.controller.getCustomerByIdController(this.req, this.res);
    } else if (
      this.router.includes("/customers/find-customer-by-name/") &&
      this.req.method === "GET"
    ) {
      this.controller.getCustomerByNameController(this.req, this.res);
    } else if (
      this.router.includes("/customers/update-customer/") &&
      this.req.method === "PUT"
    ) {
      this.controller.updateCustomerController(this.req, this.res);
    } else {
      this.res.writeHead(400, { "Content-Type": "application/json" });
      this.res.end(JSON.stringify({ message: "Route not found" }));
    }
  }
}
