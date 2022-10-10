import { CustomerControllerInterface } from "../interfaces/controllers.interfaces/customer.controller.interface";
import * as http from "http";
import { authMiddleware } from "../middlewares/auth.middleware";

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

  async route(): Promise<void | http.ServerResponse<http.IncomingMessage>> {
    if (
      this.router === "/customers/create-customer" &&
      this.req.method === "POST"
    ) {
      const middleware = await authMiddleware(this.req, this.res);
      if (middleware) {
        this.controller.createCustomerController(this.req, this.res);
      }
    } else if (
      this.router.includes("/customers/delete-customer/") &&
      this.req.method === "DELETE"
    ) {
      const middleware = await authMiddleware(this.req, this.res);
      if (middleware) {
        this.controller.deleteCustomerController(this.req, this.res);
      }
    } else if (
      this.router.includes("/customers/find-customer-by-id/") &&
      this.req.method === "GET"
    ) {
      const middleware = await authMiddleware(this.req, this.res);
      if (middleware) {
        this.controller.getCustomerByIdController(this.req, this.res);
      }
    } else if (
      this.router === "/customers/find-all-customers" &&
      this.req.method === "GET"
    ) {
      const middleware = await authMiddleware(this.req, this.res);
      if (middleware) {
        this.controller.getAllCustomersController(this.req, this.res);
      }
    } else if (
      this.router.includes("/customers/find-customers-by-name/") &&
      this.req.method === "GET"
    ) {
      const middleware = await authMiddleware(this.req, this.res);
      if (middleware) {
        this.controller.getCustomerByNameController(this.req, this.res);
      }
    } else if (
      this.router.includes("/customers/update-customer/") &&
      this.req.method === "PUT"
    ) {
      const middleware = await authMiddleware(this.req, this.res);
      if (middleware) {
        this.controller.updateCustomerController(this.req, this.res);
      }
    } else {
      this.res.writeHead(400, { "Content-Type": "application/json" });
      this.res.end(JSON.stringify({ message: "Route not found" }));
    }
  }
}
