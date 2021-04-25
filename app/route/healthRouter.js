import { Router } from 'express';

import { Constant } from '../../common';
import { HealthController } from '../controller';

const { Route: { HEALTH } } = Constant;

const router = Router();

router.get(HEALTH, HealthController);

export default router;
