"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employeesController_1 = require("../controllers/employeesController");
class EmployeesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', employeesController_1.employeesController.index);
        this.router.get('/:cpf', employeesController_1.employeesController.getEmployee);
        this.router.post('/', employeesController_1.employeesController.create);
        this.router.delete('/:cpf', employeesController_1.employeesController.delete);
        this.router.put('/:cpf', employeesController_1.employeesController.update);
    }
}
const employeesRoutes = new EmployeesRoutes();
exports.default = employeesRoutes.router;
