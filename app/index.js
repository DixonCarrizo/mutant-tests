import Express from 'express';
import Helmet from 'helmet';
import { StatusCodes } from 'http-status-codes';

import Routes from './route';

const app = Express();

app.use(Helmet());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use(Routes);

app.use((err, req, res, _next) => {
  console.error('ERROR HANDLER', {
    query: req.query,
    params: req.params,
    body: req.body,
    error: err.message,
    stack: err.stack,
  });

  res.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
});

export default app;
