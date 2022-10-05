"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoutes = void 0;
class CustomerRoutes {
    constructor(controller, router) {
        this.controller = controller;
        this.router = router;
    }
    route() {
        this.router.post("/create-customer", (req, res) => this.controller.createCustomerController(req, res));
        this.router.delete("/delete-customer/:id", (req, res) => this.controller.deleteCustomerController(req, res));
        this.router.get("/get-customer-by-id/:id", (req, res) => this.controller.getCustomerByIdController(req, res));
        this.router.get("/get-customer-by-name/:name", (req, res) => this.controller.getCustomerByNameController(req, res));
        this.router.put("/update-customer/:id", (req, res) => this.controller.updateCustomerController(req, res));
    }
}
exports.CustomerRoutes = CustomerRoutes;
