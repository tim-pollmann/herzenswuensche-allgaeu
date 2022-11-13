import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

function main (): void {
  dotenv.config();

  if (process.env.URL === undefined || process.env.PORT === undefined) {
    console.log('⚡️[server]: Could not open server due to invalid URL and/ or PORT configuration');
    console.log('⚡️[server]: Shutting down');
    return;
  }

  const app: Express = express();
  const url: string = process.env.URL;
  const port: string = process.env.PORT;

  app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server is cool');
  });

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at ${url}:${port}`);
  });
}

main();
