import Joi from 'joi';

const dnaInput = Joi.object({ dna: Joi.array().items(Joi.string().required()).required() });

export default { dnaInput };
