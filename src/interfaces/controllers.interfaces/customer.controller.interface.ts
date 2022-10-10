import * as http from "http";

export interface CustomerControllerInterface {
  createCustomerController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<http.IncomingMessage | http.ServerResponse>;

  deleteCustomerController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<http.IncomingMessage | http.ServerResponse>;

  getAllCustomersController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<http.IncomingMessage | http.ServerResponse>;

  getCustomerByIdController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<http.IncomingMessage | http.ServerResponse>;

  getCustomerByNameController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<http.IncomingMessage | http.ServerResponse>;

  updateCustomerController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<http.IncomingMessage | http.ServerResponse>;
}
