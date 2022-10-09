"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoutes = void 0;
const auth_middleware_1 = require("../middlewares/auth.middleware");
class CustomerRoutes {
    constructor(controller, router, req, res) {
        this.controller = controller;
        this.router = router;
        this.req = req;
        this.res = res;
    }
    route() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.router === "/customers/create-customer" &&
                this.req.method === "POST") {
                yield (0, auth_middleware_1.authMiddleware)(this.req, this.res);
                this.controller.createCustomerController(this.req, this.res);
            }
            else if (this.router.includes("/customers/delete-customer/") &&
                this.req.method === "DELETE") {
                yield (0, auth_middleware_1.authMiddleware)(this.req, this.res);
                this.controller.deleteCustomerController(this.req, this.res);
            }
            else if (this.router.includes("/customers/find-customer-by-id/") &&
                this.req.method === "GET") {
                yield (0, auth_middleware_1.authMiddleware)(this.req, this.res);
                this.controller.getCustomerByIdController(this.req, this.res);
            }
            else if (this.router === "/customers/find-all-customers" &&
                this.req.method === "GET") {
                yield (0, auth_middleware_1.authMiddleware)(this.req, this.res);
                this.controller.getAllCustomersController(this.req, this.res);
            }
            else if (this.router.includes("/customers/find-customers-by-name/") &&
                this.req.method === "GET") {
                yield (0, auth_middleware_1.authMiddleware)(this.req, this.res);
                this.controller.getCustomerByNameController(this.req, this.res);
            }
            else if (this.router.includes("/customers/update-customer/") &&
                this.req.method === "PUT") {
                yield (0, auth_middleware_1.authMiddleware)(this.req, this.res);
                this.controller.updateCustomerController(this.req, this.res);
            }
            else {
                this.res.writeHead(400, { "Content-Type": "application/json" });
                this.res.end(JSON.stringify({ message: "Route not found" }));
            }
        });
    }
}
exports.CustomerRoutes = CustomerRoutes;
