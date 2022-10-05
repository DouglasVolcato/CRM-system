"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
class UserRoutes {
    constructor(controller, router) {
        this.controller = controller;
        this.router = router;
    }
    route() {
        this.router.post("/create-user", (req, res) => this.controller.createUserController(req, res));
        this.router.delete("/delete-user/:id", (req, res) => this.controller.deleteUserController(req, res));
        this.router.get("/get-user-by-id/:id", (req, res) => this.controller.getUserByIdController(req, res));
        this.router.get("/get-user-by-name/:name", (req, res) => this.controller.getUserByNameController(req, res));
        this.router.put("/update-user/:id", (req, res) => this.controller.updateUserController(req, res));
    }
}
exports.UserRoutes = UserRoutes;
