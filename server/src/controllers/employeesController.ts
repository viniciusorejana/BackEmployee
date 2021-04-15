import { Request, Response } from 'express';

import pool from '../database'

class EmployeesController {

    public async index (req: Request, res: Response) {
        const employees = await pool.then((r: any) => r.query('SELECT * from employee'));
        res.json(employees);
    }

    public async getEmployee (req: Request, res: Response) {
       const { cpf } = req.params;
       const employee = await pool.then((r: any) => r.query('SELECT * from employee WHERE cpf = ?', [cpf]));
       res.json(employee)
    }

    public async create (req: Request, res: Response){
        await pool.then((r: any) => r.query('INSERT INTO employee set ?', [req.body]));
        res.json({message: 'Employee created'});
    }

    public async delete (req: Request, res: Response){
        const { cpf } = req.params;
        await pool.then((r: any) => r.query('DELETE FROM employee WHERE cpf = ?', [cpf]));
        res.json({message: 'Employee ' + req.params.cpf + ' deleted'});;
    }

    public async update (req: Request, res: Response){
        const { cpf } = req.params;
        await pool.then((r: any) => r.query('UPDATE employee set ? WHERE cpf = ?', [req.body, cpf]));
        res.json({message: 'Employee ' + req.params.cpf + ' updated'});;
    }

}

export const employeesController = new EmployeesController();