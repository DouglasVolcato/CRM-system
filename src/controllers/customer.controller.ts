import { CustomerServicesInterface } from "../interfaces/services.interfaces/customer.services.interface";
import { CustomerInterface } from "../interfaces/entities.interfaces/customer.interface";
import * as http from "http";

export class CustomerController {
  services: CustomerServicesInterface;

  constructor(services: CustomerServicesInterface) {
    this.services = services;
  }

  createCustomerController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ) {
    let body = "";

    req.on("data", (chunk: any) => {
      body += chunk.toString();
    });

    return req.on("end", async () => {
      const { id, name, age, phone, city, notes } = await JSON.parse(body);

      const customerObj = {
        id,
        name,
        age,
        phone,
        city,
        notes,
      };

      const newCustomer =
        this.services.createCustomerUseCase.execute(customerObj);

      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(newCustomer));
    });
  }

  deleteCustomerController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ) {
    const id = Number(req.url?.replace("/users/delete-user/", ""));
    const deletedCustomer = this.services.deleteCustomerUseCase.execute(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(deletedCustomer));
  }

  getCustomerByIdController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ) {
    const id = Number(req.url?.replace("/users/find-user-by-id/", ""));
    const foundCustomer = this.services.getCustomerByIdUseCase.execute(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(foundCustomer));
  }

  getCustomerByNameController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ) {
    if (req.url) {
      const name = req.url.replace("/users/find-user-by-name/", "");
      const foundCustomer =
        this.services.getCustomerByNameUseCase.execute(name);
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(foundCustomer));
    }
    res.writeHead(400, { "Content-Type": "application/json" });
    return res.end({ message: "Invalid url." });
  }

  updateCustomerController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ) {
    let body = "";

    req.on("data", (chunk: any) => {
      body += chunk.toString();
    });

    return req.on("end", async () => {
      const { id, name, age, phone, city, notes } = await JSON.parse(body);

      const customerObj = {
        id,
        name,
        age,
        phone,
        city,
        notes,
      };

      const updatedCustomer = this.services.updateCustomerUseCase.execute(
        id,
        customerObj
      );
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(updatedCustomer));
    });
  }
}
