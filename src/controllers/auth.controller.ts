import { AuthServicesInterface } from "../interfaces/services.interfaces/auth.services.interface";
import * as http from "http";
import { statusCodeGenerator } from "../helpers/statusCodeGenerator";

export class AuthController {
  services: AuthServicesInterface;

  constructor(services: AuthServicesInterface) {
    this.services = services;
  }

  async loginController(
    req: http.IncomingMessage,
    res: http.ServerResponse
  ): Promise<http.IncomingMessage | http.ServerResponse> {
    let body = "";

    req.on("data", (chunk: any) => {
      body += chunk.toString();
    });

    return req.on("end", async () => {
      try {
        const { email, password }: { email: string; password: string } =
          await JSON.parse(body);

        await this.services.comparePasswordUseCase.execute(password, email);

        const generatedToken =
          this.services.generateTokenUseCase.execute(email);

        res.writeHead(202, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ token: generatedToken }));
      } catch (err) {
        res.writeHead(statusCodeGenerator(err), {
          "Content-Type": "application/json",
        });
        return res.end(JSON.stringify({ Message: "Error in login: " + err }));
      }
    });
  }
}
