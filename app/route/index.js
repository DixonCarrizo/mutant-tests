import { Router } from 'express';

import healthRouter from './healthRouter';
// import mutantRouter from './mutantRouter';

const router = Router();

router.use(healthRouter);
// router.use(mutantRouter);

export default router;
