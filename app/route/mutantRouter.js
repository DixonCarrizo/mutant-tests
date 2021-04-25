import { Router } from 'express';

import { Constant, Helper } from '../../common';
import { MutantController } from '../controller';

const { Route: { MUTANT_VALIDATOR } } = Constant;
const { Wrap } = Helper;

const router = Router();

router.post(MUTANT_VALIDATOR, Wrap(MutantController.validateDna));

export default router;
