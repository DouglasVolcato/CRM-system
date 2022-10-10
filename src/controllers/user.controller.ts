import * as http from "http";
import { statusCodeGenerator } from "../helpers/statusCodeGenerator";
import { UserServicesInterface } from "../interfaces/services.interfaces/user.services.interface";

export class UserController {
  services: UserServicesInterface;

  constructor(services: UserServicesInterface) {
    this.services = services;
  }

  async createUserController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<http.IncomingMessage | http.ServerResponse> {
    let body = "";

    req.on("data", (chunk: any) => {
      body += chunk.toString();
    });

    return req.on("end", async () => {
      try {
        const {
          id,
          name,
          username,
          email,
          password,
        }: {
          id: string;
          name: string;
          username: string;
          email: string;
          password: string;
        } = await JSON.parse(body);

        const userObj = {
          id,
          name,
          username,
          email,
          password,
        };

        try {
          await this.services.getUserByEmailUseCase.execute(email);

          res.writeHead(400, {
            "Content-Type": "application/json",
          });
          return res.end(
            JSON.stringify({ Message: "Email already registered." })
          );
        } catch (err) {
          const newUser = await this.services.createUserUsecase.execute(
            userObj
          );

          res.writeHead(201, { "Content-Type": "application/json" });
          return res.end(JSON.stringify(newUser));
        }
      } catch (err) {
        res.writeHead(statusCodeGenerator(err), {
          "Content-Type": "application/json",
        });
        return res.end(
          JSON.stringify({ Message: "Error creating user: " + err })
        );
      }
    });
  }

  async deleteUserController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<http.IncomingMessage | http.ServerResponse> {
    try {
      const id: string | undefined = req.url?.replace(
        "/users/delete-user/",
        ""
      );
      if (id) {
        const deletedUser = await this.services.deleteUserUsecase.execute(id);
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(deletedUser));
      } else {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end({ message: "Invalid url." });
      }
    } catch (err) {
      res.writeHead(statusCodeGenerator(err), {
        "Content-Type": "application/json",
      });
      return res.end(
        JSON.stringify({ Message: "Error deleting customer: " + err })
      );
    }
  }

  async getAllUsersController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<http.IncomingMessage | http.ServerResponse> {
    try {
      const foundUsers = await this.services.getAllUserUseCase.execute();
      res.writeHead(302, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(foundUsers));
    } catch (err) {
      res.writeHead(statusCodeGenerator(err), {
        "Content-Type": "application/json",
      });
      return res.end(
        JSON.stringify({ Message: "Error finding users: " + err })
      );
    }
  }

  async getUserByIdController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<http.IncomingMessage | http.ServerResponse> {
    const id: string | undefined = req.url?.replace(
      "/users/find-user-by-id/",
      ""
    );
    try {
      if (id) {
        const foundUser = await this.services.getUserByIdUseCase.execute(id);
        res.writeHead(302, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(foundUser));
      }
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "Invalid url." }));
    } catch (err) {
      res.writeHead(statusCodeGenerator(err), {
        "Content-Type": "application/json",
      });
      return res.end(JSON.stringify({ message: "Error finding user: " + err }));
    }
  }

  async getUserByEmailController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<http.IncomingMessage | http.ServerResponse> {
    const email: string | undefined = req.url?.replace(
      "/users/find-user-by-email/",
      ""
    );

    try {
      if (email) {
        const foundUser = await this.services.getUserByEmailUseCase.execute(
          email
        );
        res.writeHead(302, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(foundUser));
      }
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "Invalid url." }));
    } catch (err) {
      res.writeHead(statusCodeGenerator(err), {
        "Content-Type": "application/json",
      });
      return res.end(JSON.stringify({ message: "Error finding user: " + err }));
    }
  }

  async getUserByNameController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<http.IncomingMessage | http.ServerResponse> {
    try {
      if (req.url) {
        const name = req.url?.replace("/users/find-users-by-name/", "");
        const foundUser = await this.services.getUserByNameUseCase.execute(
          name
        );
        res.writeHead(302, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(foundUser));
      }
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "Invalid url." }));
    } catch (err) {
      res.writeHead(statusCodeGenerator(err), {
        "Content-Type": "application/json",
      });
      return res.end(JSON.stringify({ message: "Error finding user: " + err }));
    }
  }

  async updateUserController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<http.IncomingMessage | http.ServerResponse> {
    const userId: string | undefined = req.url?.replace(
      "/users/update-user/",
      ""
    );
    let body = "";

    if (userId) {
      req.on("data", (chunk: any) => {
        body += chunk.toString();
      });

      return req.on("end", async () => {
        const {
          id,
          name,
          username,
          email,
          password,
        }: {
          id: string;
          name: string;
          username: string;
          email: string;
          password: string;
        } = await JSON.parse(body);

        const userObj = {
          id,
          name,
          username,
          email,
          password,
        };

        try {
          const updatedUser = await this.services.updateUserUseCase.execute(
            userId,
            userObj
          );
          res.writeHead(200, { "Content-Type": "application/json" });
          return res.end(JSON.stringify(updatedUser));
        } catch (err) {
          res.writeHead(statusCodeGenerator(err), {
            "Content-Type": "application/json",
          });
          return res.end(
            JSON.stringify({ Message: "Error updating user: " + err })
          );
        }
      });
    }
    res.writeHead(400, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ message: "Invalid url." }));
  }
}
