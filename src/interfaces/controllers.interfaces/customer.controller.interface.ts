import { CustomerInterface } from "../entities.interfaces/customer.interface";
import * as http from "http";

export interface CustomerControllerInterface {
  createCustomerController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): http.IncomingMessage;

  deleteCustomerController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): http.ServerResponse;

  getCustomerByIdController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): http.ServerResponse;

  getCustomerByNameController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): http.ServerResponse;

  updateCustomerController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): http.IncomingMessage;
}
