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
exports.makeCustomerFactory = void 0;
const customer_controller_1 = require("../controllers/customer.controller");
const customer_repository_1 = require("../repositories/customer.repository");
const customer_routes_1 = require("../routes/customer.routes");
const services = __importStar(require("../services/customer.services.index"));
function makeCustomerFactory(router, req, res) {
    const customerRepository = new customer_repository_1.CustomerRepository();
    const createCustomerUseCase = new services.CreateCustomerUseCase(customerRepository);
    const deleteCustomerUseCase = new services.DeleteCustomerUseCase(customerRepository);
    const getAllCustomerUseCase = new services.GetAllCustomerUseCase(customerRepository);
    const getCustomerByIdUseCase = new services.GetCustomerByIdUseCase(customerRepository);
    const getCustomerByNameUseCase = new services.GetCustomerByNameUseCase(customerRepository);
    const updateCustomerUseCase = new services.UpdateCustomerUseCase(customerRepository);
    const customerController = new customer_controller_1.CustomerController({
        createCustomerUseCase,
        deleteCustomerUseCase,
        getAllCustomerUseCase,
        getCustomerByIdUseCase,
        getCustomerByNameUseCase,
        updateCustomerUseCase,
    });
    const customerRoutes = new customer_routes_1.CustomerRoutes(customerController, router, req, res);
    return customerRoutes.route();
}
exports.makeCustomerFactory = makeCustomerFactory;
