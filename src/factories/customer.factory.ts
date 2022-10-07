import { CustomerController } from "../controllers/customer.controller";
import * as http from "http";
import { CustomerRepository } from "../repositories/customer.repository";
import { CustomerRoutes } from "../routes/customer.routes";
import * as services from "../services/customer.services.index";

export function makeCustomerFactory(
  router: string,
  req: http.IncomingMessage,
  res: http.ServerResponse
) {
  const customerRepository = new CustomerRepository();

  const createCustomerUseCase = new services.CreateCustomerUseCase(
    customerRepository
  );
  const deleteCustomerUseCase = new services.DeleteCustomerUseCase(
    customerRepository
  );
  const getAllCustomerUseCase = new services.GetAllCustomerUseCase(
    customerRepository
  );
  const getCustomerByIdUseCase = new services.GetCustomerByIdUseCase(
    customerRepository
  );
  const getCustomerByNameUseCase = new services.GetCustomerByNameUseCase(
    customerRepository
  );
  const updateCustomerUseCase = new services.UpdateCustomerUseCase(
    customerRepository
  );

  const customerController = new CustomerController({
    createCustomerUseCase,
    deleteCustomerUseCase,
    getAllCustomerUseCase,
    getCustomerByIdUseCase,
    getCustomerByNameUseCase,
    updateCustomerUseCase,
  });

  const customerRoutes = new CustomerRoutes(
    customerController,
    router,
    req,
    res
  );

  return customerRoutes.route();
}
