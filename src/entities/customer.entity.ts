import { generateId } from "../helpers/idGenerator";
import { CustomerInterface } from "../interfaces/entities.interfaces/customer.interface";

export class Customer {
  id: string;
  name: string;
  age?: number | undefined;
  phone?: number | undefined;
  city?: string;
  notes?: string;

  constructor(userBody: CustomerInterface) {
    this.id = generateId();
    this.name = userBody.name;
    this.age = userBody.age ?? undefined;
    this.phone = userBody.phone ?? undefined;
    this.city = userBody.city ?? "";
    this.notes = userBody.notes ?? "";
  }

  validate() {
    if (!this.name) {
      throw new Error("Missing name in customer creation.");
    }
  }

  getCustomer() {
    return {
      id: this.id,
      name: this.name,
      age: this.age,
      phone: this.phone,
      city: this.city,
      notes: this.notes,
    };
  }
}
