import Express from 'express';
import Helmet from 'helmet';

import Routes from './route';
import { errorHandler } from './middleware';

const app = Express();

app.use(Helmet());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use(Routes);

app.use(errorHandler);

export default app;
