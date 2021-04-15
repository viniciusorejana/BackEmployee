import { Request, Response } from 'express';

class IndexController {

    public index (req: Request, res: Response) {
        res.json({text: 'api/name-api'})
    }

}

export const indexController = new IndexController();