import db from './dbConnection';

const MODEL = 'dna_validations';

const findDnaValidation = (where) => db(MODEL)
  .where(where)
  .orderBy('created_at', 'desc')
  .first();

const insertDnaValidation = (data) => db(MODEL)
  .returning('*')
  .insert(data)
  .then(([item]) => item);

// const hola = () => {
//   db(MODEL).select().groupBy('is_mutant');
// };

export default {
  findDnaValidation,
  insertDnaValidation,
};

