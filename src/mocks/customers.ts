interface Customers {
  list: {
    id: number;
    name: string;
    age: number;
    phone: number;
    city: string;
    notes: string;
  }[];
}

const customers: Customers = { list: [] };
