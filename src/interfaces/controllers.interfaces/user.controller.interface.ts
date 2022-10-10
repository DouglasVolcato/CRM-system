import * as http from "http";

export interface UserControllerInterface {
  createUserController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<http.IncomingMessage | http.ServerResponse>;

  deleteUserController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<http.IncomingMessage | http.ServerResponse>;

  getAllUsersController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<http.IncomingMessage | http.ServerResponse>;

  getUserByIdController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<http.IncomingMessage | http.ServerResponse>;

  getUserByEmailController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<http.IncomingMessage | http.ServerResponse>;

  getUserByNameController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<http.IncomingMessage | http.ServerResponse>;

  updateUserController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<http.IncomingMessage | http.ServerResponse>;
}
