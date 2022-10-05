import { CustomerInterface } from "../interfaces/entities.interfaces/customer.interface";

export class Customer {
  id: number;
  name: string;
  age?: number | null;
  phone?: number;
  city?: string;
  notes?: string;

  constructor(userBody: CustomerInterface) {
    this.id = userBody.id;
    this.name = userBody.name;
    this.age = userBody.age;
    this.phone = userBody.phone;
    this.city = userBody.city;
    this.notes = userBody.notes;
  }

  validate() {
    if (!this.name || !this.id) {
      throw new Error("Missing fields for customer creation.");
    }
  }

  getCustomer() {
    return {
      id: this.id,
      name: this.name,
      age: this.age ?? null,
      phone: this.phone ?? null,
      city: this.city ?? null,
      notes: this.notes ?? null,
    };
  }
}
