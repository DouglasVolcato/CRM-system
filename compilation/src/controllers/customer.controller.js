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
exports.CustomerController = void 0;
class CustomerController {
    constructor(services) {
        this.services = services;
    }
    createCustomerController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk.toString();
            });
            return req.on("end", () => __awaiter(this, void 0, void 0, function* () {
                const { id, name, age, phone, city, notes } = yield JSON.parse(body);
                const customerObj = {
                    id,
                    name,
                    age,
                    phone,
                    city,
                    notes,
                };
                const newCustomer = yield this.services.createCustomerUseCase.execute(customerObj);
                res.writeHead(200, { "Content-Type": "application/json" });
                return res.end(JSON.stringify(newCustomer));
            }));
        });
    }
    deleteCustomerController(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const id = (_a = req.url) === null || _a === void 0 ? void 0 : _a.replace("/customers/delete-customers/", "").split("/")[3];
            if (id) {
                const deletedCustomer = yield this.services.deleteCustomerUseCase.execute(id);
                res.writeHead(200, { "Content-Type": "application/json" });
                return res.end(JSON.stringify(deletedCustomer));
            }
            res.writeHead(400, { "Content-Type": "application/json" });
            return res.end({ message: "Invalid url." });
        });
    }
    getAllCustomersController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundCustomers = yield this.services.getAllCustomerUseCase.execute();
            res.writeHead(200, { "Content-Type": "application/json" });
            return res.end(JSON.stringify(foundCustomers));
        });
    }
    getCustomerByIdController(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const id = (_a = req.url) === null || _a === void 0 ? void 0 : _a.replace("/customers/find-customers-by-id/", "").split("/")[3];
            if (id) {
                const foundCustomer = yield this.services.getCustomerByIdUseCase.execute(id);
                res.writeHead(200, { "Content-Type": "application/json" });
                return res.end(JSON.stringify(foundCustomer));
            }
            res.writeHead(400, { "Content-Type": "application/json" });
            return res.end({ message: "Invalid url." });
        });
    }
    getCustomerByNameController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.url) {
                const name = req.url.replace("/customers/find-customers-by-name/", "");
                const foundCustomer = yield this.services.getCustomerByNameUseCase.execute(name);
                res.writeHead(200, { "Content-Type": "application/json" });
                return res.end(JSON.stringify(foundCustomer));
            }
            res.writeHead(400, { "Content-Type": "application/json" });
            return res.end({ message: "Invalid url." });
        });
    }
    updateCustomerController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk.toString();
            });
            return req.on("end", () => __awaiter(this, void 0, void 0, function* () {
                const { id, name, age, phone, city, notes } = yield JSON.parse(body);
                const customerObj = {
                    id,
                    name,
                    age,
                    phone,
                    city,
                    notes,
                };
                const updatedCustomer = yield this.services.updateCustomerUseCase.execute(id, customerObj);
                res.writeHead(200, { "Content-Type": "application/json" });
                return res.end(JSON.stringify(updatedCustomer));
            }));
        });
    }
}
exports.CustomerController = CustomerController;
