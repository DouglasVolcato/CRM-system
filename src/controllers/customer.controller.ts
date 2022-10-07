import { CustomerServicesInterface } from "../interfaces/services.interfaces/customer.services.interface";
import * as http from "http";
import { statusCodeGenerator } from "../helpers/statusCodeGenerator";

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
      try {
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

        res.writeHead(201, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(newCustomer));
      } catch (err) {
        res.writeHead(statusCodeGenerator(err), {
          "Content-Type": "application/json",
        });
        return res.end(
          JSON.stringify({ Message: "Error creating customer: " + err })
        );
      }
    });
  }

  async deleteCustomerController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ) {
    try {
      const id = req.url?.replace("/customers/delete-customer/", "");
      if (id) {
        const deletedCustomer =
          await this.services.deleteCustomerUseCase.execute(id);
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(deletedCustomer));
      }
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "Invalid url." }));
    } catch (err) {
      res.writeHead(statusCodeGenerator(err), {
        "Content-Type": "application/json",
      });
      return res.end(
        JSON.stringify({ Message: "Error deleting customer: " + err })
      );
    }
  }

  async getAllCustomersController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ) {
    try {
      const foundCustomers =
        await this.services.getAllCustomerUseCase.execute();
      res.writeHead(302, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(foundCustomers));
    } catch (err) {
      res.writeHead(statusCodeGenerator(err), { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({ Message: "Error finding customers: " + err })
      );
    }
  }

  async getCustomerByIdController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ) {
    const id = req.url?.replace("/customers/find-customer-by-id/", "");
    try {
      if (id) {
        const foundCustomer =
          await this.services.getCustomerByIdUseCase.execute(id);
        res.writeHead(302, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(foundCustomer));
      }
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "Invalid url." }));
    } catch (err) {
      res.writeHead(statusCodeGenerator(err), { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({ message: "Error finding customer: " + err })
      );
    }
  }

  async getCustomerByNameController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ) {
    try {
      if (req.url) {
        const name = req.url.replace("/customers/find-customers-by-name/", "");
        const foundCustomer =
          await this.services.getCustomerByNameUseCase.execute(name);
        res.writeHead(302, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(foundCustomer));
      }
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "Invalid url." }));
    } catch (err) {
      res.writeHead(statusCodeGenerator(err), { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({ Message: "Error finding customer: " + err })
      );
    }
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

        try {
          const updatedCustomer =
            await this.services.updateCustomerUseCase.execute(
              customerId,
              customerObj
            );
          res.writeHead(200, { "Content-Type": "application/json" });
          return res.end(JSON.stringify(updatedCustomer));
        } catch (err) {
          res.writeHead(statusCodeGenerator(err), { "Content-Type": "application/json" });
          return res.end(
            JSON.stringify({ Message: "Error updating customer: " + err })
          );
        }
      });
    }
    res.writeHead(400, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ message: "Invalid url." }));
  }
}
