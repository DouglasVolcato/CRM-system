import { CustomerServicesInterface } from "../interfaces/services.interfaces/customer.services.interface";
import { CustomerInterface } from "../interfaces/entities.interfaces/customer.interface";

export class CustomerController {
  services: CustomerServicesInterface;

  constructor(services: CustomerServicesInterface) {
    this.services = services;
  }

  createCustomerController(req: any, res: any) {
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

  deleteCustomerController(req: any, res: any) {
    const id = Number(req.url.replace("/users/delete-user/", ""));
    const deletedCustomer = this.services.deleteCustomerUseCase.execute(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(deletedCustomer));
  }

  getCustomerByIdController(req: any, res: any) {
    const id = Number(req.url.replace("/users/find-user-by-id/", ""));
    const foundCustomer = this.services.getCustomerByIdUseCase.execute(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(foundCustomer));
  }

  getCustomerByNameController(req: any, res: any) {
    const name = req.url.replace("/users/find-user-by-name/", "");
    const foundCustomer = this.services.getCustomerByNameUseCase.execute(name);
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(foundCustomer));
  }

  updateCustomerController(req: any, res: any) {
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
