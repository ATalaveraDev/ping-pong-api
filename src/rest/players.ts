import { Request, Response } from 'express';

export default [
  {
    path: '/users',
    method: 'get',
    handler: async (req: Request, res: Response) => {
      res.send('hello')
    }
  }
];
