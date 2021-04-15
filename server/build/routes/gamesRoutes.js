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
    }
}
const employeesRoutes = new EmployeesRoutes();
exports.default = employeesRoutes.router;
