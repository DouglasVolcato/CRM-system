"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
class AuthRoutes {
    constructor(controller, router, req, res) {
        this.controller = controller;
        this.router = router;
        this.req = req;
        this.res = res;
    }
    route() {
        if (this.router === "/auth/login" && this.req.method === "POST") {
            this.controller.loginController(this.req, this.res);
        }
        else {
            this.res.writeHead(400, { "Content-Type": "application/json" });
            this.res.end(JSON.stringify({ message: "Route not found" }));
        }
    }
}
exports.AuthRoutes = AuthRoutes;
