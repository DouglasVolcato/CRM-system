"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_factory_1 = require("./src/factories/customer.factory");
const user_factory_1 = require("./src/factories/user.factory");
const auth_factory_1 = require("./src/factories/auth.factory");
const envVariables_1 = require("./src/config/envVariables");
const http = __importStar(require("http"));
const { port } = (0, envVariables_1.envVariables)();
const server = http.createServer((req, res) => {
    const router = req.url;
    if (router === null || router === void 0 ? void 0 : router.includes("/users/")) {
        (0, user_factory_1.makeUserFactory)(router, req, res);
    }
    else if (router === null || router === void 0 ? void 0 : router.includes("/customers/")) {
        (0, customer_factory_1.makeCustomerFactory)(router, req, res);
    }
    else if (router === null || router === void 0 ? void 0 : router.includes("/auth")) {
        (0, auth_factory_1.makeAuthFactory)(router, req, res);
    }
    else {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});
server
    .listen(port, () => console.log("http://localhost:" + port))
    .on("error", (err) => console.log(err));
