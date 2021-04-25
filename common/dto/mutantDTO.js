const dnaValidatorResponse = (mutantFlag) => ({ is_mutant: mutantFlag });
const dnaValidationStats = (dbResults) => {
  let mutant = 0;
  let nonMutant = 0;

  dbResults.forEach(({ is_mutant: mutantFlag = false, count = 0 }) => {
    if (mutantFlag) {
      mutant = count;
    } else {
      nonMutant = count;
    }
  });

  const ratio = nonMutant ? mutant / nonMutant : mutant;

  return {
    count_mutant_dna: mutant,
    count_human_dna: nonMutant,
    ratio,
  };
};

export default { dnaValidatorResponse, dnaValidationStats };
