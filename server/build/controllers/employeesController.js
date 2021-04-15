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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class EmployeesController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const employees = yield database_1.default.then((r) => r.query('SELECT * from employee'));
            res.json(employees);
        });
    }
    getEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cpf } = req.params;
            const employee = yield database_1.default.then((r) => r.query('SELECT * from employee WHERE cpf = ?', [cpf]));
            res.json(employee);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((r) => r.query('INSERT INTO employee set ?', [req.body]));
            res.json({ message: 'Employee created' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cpf } = req.params;
            yield database_1.default.then((r) => r.query('DELETE FROM employee WHERE cpf = ?', [cpf]));
            res.json({ message: 'Employee ' + req.params.cpf + ' deleted' });
            ;
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cpf } = req.params;
            yield database_1.default.then((r) => r.query('UPDATE employee set ? WHERE cpf = ?', [req.body, cpf]));
            res.json({ message: 'Employee ' + req.params.cpf + ' updated' });
            ;
        });
    }
}
exports.employeesController = new EmployeesController();
