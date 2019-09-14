import { Request, Response } from 'express';

export default [
  {
    path: '/players',
    method: 'get',
    handler: async (req: Request, res: Response) => {
      res.send('hello')
    }
  }
];
