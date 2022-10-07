import * as http from "http";

export interface CustomerControllerInterface {
  createCustomerController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<unknown> | http.IncomingMessage;

  deleteCustomerController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<unknown> | http.ServerResponse;

  getAllCustomersController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<unknown> | http.ServerResponse;

  getCustomerByIdController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<unknown> | http.ServerResponse;

  getCustomerByNameController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<unknown> | http.ServerResponse;

  updateCustomerController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<unknown> | http.IncomingMessage;
}
