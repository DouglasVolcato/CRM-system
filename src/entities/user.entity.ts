import { UserInterface } from "../interfaces/entities.interfaces/user.interface";
import { generateId } from "../helpers/idGenerator";
import { cryptography } from "../helpers/cryptography";

export class User {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;

  constructor(userBody: UserInterface) {
    this.id = generateId();
    this.name = userBody.name;
    this.username = userBody.username;
    this.email = userBody.email;
    this.password = userBody.password;
  }

  validate() {
    if (
      !this.name ||
      !this.id ||
      !this.username ||
      !this.email ||
      !this.password
    ) {
      throw new Error("Missing fields for user creation.");
    }
  }

  getUser() {
    return {
      id: this.id,
      name: this.name,
      username: this.username,
      email: this.email,
      password: cryptography.encryptPassword(this.password),
    };
  }
}
