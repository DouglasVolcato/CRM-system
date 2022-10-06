import * as http from "http";

export interface UserControllerInterface {
  createUserController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<unknown> | http.IncomingMessage;

  deleteUserController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<unknown> | http.ServerResponse;

  getUserByIdController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<unknown> | http.ServerResponse;

  getUserByNameController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<unknown> | http.ServerResponse;

  updateUserController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<unknown> | http.IncomingMessage;
}
