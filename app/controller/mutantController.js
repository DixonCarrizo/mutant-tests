import { StatusCodes } from 'http-status-codes';

import { DTO, Validator } from '../../common';
import { Service } from '../../core';
import { Model } from '../../domain';

const { MutantDTO: { dnaValidatorResponse, dnaValidationStats }, HandledErrorResponse, DnaValidationsModel } = DTO;
const { MutantValidator: { dnaInput } } = Validator;
const { MutantService: { isMutant } } = Service;
const { DnaValidationModel: { insertDnaValidation, getValidationStats } } = Model;

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
    insertDnaValidation(DnaValidationsModel(mutantFlag, dna));
  }

  res.status(status).json(response);
};

const validationStats = async (_, res) => {
  const response = await getValidationStats();

  res.json(dnaValidationStats(response));
};

export default { validateDna, validationStats };
