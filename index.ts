import { makeCustomerFactory } from "./src/factories/customer.factory";
import { makeUserFactory } from "./src/factories/user.factory";

import * as http from "http";

const server = http.createServer((req, res) => {
  const router = req.url;

  if (router?.includes("/users/")) {
    makeUserFactory(router, req, res);
  } else if (router?.includes("/customers/")) {
    makeCustomerFactory(router, req, res);
  } else {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

const port = process.env.PORT || 5000;

server.listen(port, () => console.log("http://localhost:" + port));
