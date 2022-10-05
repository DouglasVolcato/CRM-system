"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
class CustomerController {
    constructor(services) {
        this.services = services;
    }
    createCustomerController(req, res) {
        const body = req.body;
        const newCustomer = this.services.createCustomerUseCase.execute(body);
        return res.send(newCustomer);
    }
    deleteCustomerController(req, res) {
        const id = Number(req.params.id);
        const deletedCustomer = this.services.deleteCustomerUseCase.execute(id);
        return res.send(deletedCustomer);
    }
    getCustomerByIdController(req, res) {
        const id = Number(req.params.id);
        const foundCustomer = this.services.getCustomerByIdUseCase.execute(id);
        return res.send(foundCustomer);
    }
    getCustomerByNameController(req, res) {
        const name = req.params.name;
        const foundCustomer = this.services.getCustomerByNameUseCase.execute(name);
        return res.send(foundCustomer);
    }
    updateCustomerController(req, res) {
        const id = Number(req.params.id);
        const body = req.body;
        const updatedCustomer = this.services.updateCustomerUseCase.execute(id, body);
        return res.send(updatedCustomer);
    }
}
exports.CustomerController = CustomerController;
