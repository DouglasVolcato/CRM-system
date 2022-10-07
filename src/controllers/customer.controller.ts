import { CustomerServicesInterface } from "../interfaces/services.interfaces/customer.services.interface";
import * as http from "http";

export class CustomerController {
  services: CustomerServicesInterface;

  constructor(services: CustomerServicesInterface) {
    this.services = services;
  }

  async createCustomerController(
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

      const newCustomer = await this.services.createCustomerUseCase.execute(
        customerObj
      );

      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(newCustomer));
    });
  }

  async deleteCustomerController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ) {
    const id = req.url?.replace("/customers/delete-customer/", "");
    if (id) {
      const deletedCustomer = await this.services.deleteCustomerUseCase.execute(
        id
      );
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(deletedCustomer));
    }
    res.writeHead(400, { "Content-Type": "application/json" });
    return res.end({ message: "Invalid url." });
  }

  async getAllCustomersController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ) {
    const foundCustomers = await this.services.getAllCustomerUseCase.execute();
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(foundCustomers));
  }

  async getCustomerByIdController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ) {
    const id = req.url?.replace("/customers/find-customer-by-id/", "");
    if (id) {
      const foundCustomer = await this.services.getCustomerByIdUseCase.execute(
        id
      );
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(foundCustomer));
    }
    res.writeHead(400, { "Content-Type": "application/json" });
    return res.end({ message: "Invalid url." });
  }

  async getCustomerByNameController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ) {
    if (req.url) {
      const name = req.url.replace("/customers/find-customers-by-name/", "");
      const foundCustomer =
        await this.services.getCustomerByNameUseCase.execute(name);
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(foundCustomer));
    }
    res.writeHead(400, { "Content-Type": "application/json" });
    return res.end({ message: "Invalid url." });
  }

  async updateCustomerController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ) {
    const customerId = req.url?.replace("/customers/update-customer/", "");

    let body = "";

    if (customerId) {
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

        const updatedCustomer =
          await this.services.updateCustomerUseCase.execute(
            customerId,
            customerObj
          );
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(updatedCustomer));
      });
    }
    res.writeHead(400, { "Content-Type": "application/json" });
    return res.end({ message: "Invalid url." });
  }
}
