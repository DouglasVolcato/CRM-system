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
exports.UpdateCustomerUseCase = void 0;
class UpdateCustomerUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(customerId, customerBody) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            const foundCustomer = yield this.repository.getCustomerById(customerId);
            const body = {
                id: foundCustomer.id,
                name: (_a = customerBody.name) !== null && _a !== void 0 ? _a : foundCustomer.name,
                age: (_b = customerBody.age) !== null && _b !== void 0 ? _b : foundCustomer.age,
                phone: (_c = customerBody.phone) !== null && _c !== void 0 ? _c : foundCustomer.phone,
                city: (_d = customerBody.city) !== null && _d !== void 0 ? _d : foundCustomer.city,
                notes: (_e = customerBody.notes) !== null && _e !== void 0 ? _e : foundCustomer.notes,
            };
            const updatedCustomer = yield this.repository.updateCustomer(customerId, body);
            return updatedCustomer;
        });
    }
}
exports.UpdateCustomerUseCase = UpdateCustomerUseCase;
