interface Users {
  list: {
    username: string;
    email: string;
    password: string;
  }[];
}

const users: Users = { list: [] };
