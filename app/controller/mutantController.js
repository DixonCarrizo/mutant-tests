import { StatusCodes } from 'http-status-codes';

import { DTO, Validator } from '../../common';
import { Service } from '../../core';

const { MutantDTO: { dnaValidatorResponse }, HandledErrorResponse } = DTO;
const { MutantValidator: { dnaInput } } = Validator;
const { MutantService: { isMutant } } = Service;

const validateDna = async (req, res) => {
  const { body } = req;
  let response;
  let status;
  const { error } = dnaInput.validate(body, { allowUnknown: true, abortEarly: false });

  if (error) {
    const errorMessage = error.details
      .reduce((prev, curr) => (
        prev ? `${prev}, ${curr.message}` : curr.message
      ), null);
    response = HandledErrorResponse(errorMessage);
    status = StatusCodes.BAD_REQUEST;
  } else {
    const { dna } = body;
    const mutantFlag = isMutant(dna.map((dnaFragment) => dnaFragment.split('')));
    status = mutantFlag ? StatusCodes.OK : StatusCodes.FORBIDDEN;
    response = dnaValidatorResponse(mutantFlag);
  }

  res.status(status).json(response);
};

export default { validateDna };
