import * as http from "http";

export interface UserControllerInterface {
  createUserController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): http.IncomingMessage;

  deleteUserController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): http.ServerResponse;

  getUserByIdController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): http.ServerResponse;

  getUserByNameController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): http.ServerResponse;

  updateUserController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): http.IncomingMessage;
}
