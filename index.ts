import { makeCustomerFactory } from "./src/factories/customer.factory";
import { makeUserFactory } from "./src/factories/user.factory";
import { envVariables } from "./src/config/envVariables";
import * as http from "http";

const { port } = envVariables();
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

server
  .listen(3000, () => console.log("http://localhost:" + port))
  .on("error", (err) => console.log(err));
