import { Router } from 'express';

import { employeesController } from '../controllers/employeesController';

class EmployeesRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', employeesController.index);
        this.router.get('/:cpf', employeesController.getEmployee);
        this.router.post('/', employeesController.create);
        this.router.delete('/:cpf', employeesController.delete);
        this.router.put('/:cpf', employeesController.update);
    }

}

const employeesRoutes = new EmployeesRoutes();
export default employeesRoutes.router;