import { Router } from 'express';

import { Constant, Helper } from '../../common';
import { MutantController } from '../controller';

const { Route: { MUTANT } } = Constant;
const { Wrap } = Helper;

const router = Router();

router.post(MUTANT, Wrap(MutantController.validateDna));

export default router;
