import Joi from 'joi';

const regexMessage = 'The DNA sequence must contain only the letters ACGT in uppercase, check your input';

const dnaInput = Joi.object({
  dna: Joi.array().items(
    Joi.string()
      .regex(/^[ACGT]*$/)
      .required()
      .messages({ 'string.pattern.base': regexMessage }),
  ).required(),
});

export default { dnaInput };
