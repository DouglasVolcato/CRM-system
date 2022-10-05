"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
class CustomerController {
    constructor(services) {
        this.services = services;
    }
    createUserController(req, res) {
        const body = req.body;
        const newCustomer = this.services.CreateCustomerUseCase.execute(body);
        res.send(newCustomer);
    }
    deleteUserController(req, res) {
        const id = Number(req.params.id);
        const deletedCustomer = this.services.DeleteCustomerUseCase.execute(id);
        res.send(deletedCustomer);
    }
    getUserByIdController(req, res) {
        const id = Number(req.params.id);
        const foundCustomer = this.services.GetCustomerByIdUseCase.execute(id);
        res.send(foundCustomer);
    }
    getUserByNameController(req, res) {
        const name = req.params.name;
        const foundCustomer = this.services.GetCustomerByNameUseCase.execute(name);
        res.send(foundCustomer);
    }
    updateUserController(req, res) {
        const id = Number(req.params.id);
        const body = req.body;
        const updatedCustomer = this.services.UpdateCustomerUseCase.execute(id, body);
        res.send(updatedCustomer);
    }
}
exports.CustomerController = CustomerController;
