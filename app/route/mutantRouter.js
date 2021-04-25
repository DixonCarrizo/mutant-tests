import { Router } from 'express';

import { Constant, Helper } from '../../common';
import { MutantController } from '../controller';

const { Route: { MUTANT, STATS } } = Constant;
const { Wrap } = Helper;

const router = Router();

router.post(MUTANT, Wrap(MutantController.validateDna));
router.get(STATS, Wrap(MutantController.validationStats));

export default router;
