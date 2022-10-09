import { cryptography } from "../../helpers/cryptography";

export class GenerateTokenUseCase {
  execute(userEmail: string): string {
    return cryptography.generateToken(userEmail);
  }
}
