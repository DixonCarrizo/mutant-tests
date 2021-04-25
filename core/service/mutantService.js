import { Constant } from '../../common';

const { Mutant: { SEQUENCE_LENGTH, VALIDATION_TYPES } } = Constant;

const getMatrixPositionValue = (row, column, matrix) => (matrix[row] ? matrix[row][column] : '');

const getValidationRowAndColumns = (row, column, validationType) => {
  const rowAndColumns = {
    row,
    column,
  };

  switch (validationType) {
    case VALIDATION_TYPES.DIAGONAL:
      rowAndColumns.row += 1;
      rowAndColumns.column += 1;
      break;
    case VALIDATION_TYPES.NEXT:
      rowAndColumns.column += 1;
      break;
    case VALIDATION_TYPES.DOWN:
      rowAndColumns.row += 1;
      break;
    default:
      rowAndColumns.row = -1;
      rowAndColumns.column = -1;
      break;
  }

  return rowAndColumns;
};

const genValidator = (gen, row, column, matrix, validationType, accumulations = 1) => {
  const { row: nextRow, column: nextColumn } = getValidationRowAndColumns(row, column, validationType);
  const nextGen = getMatrixPositionValue(nextRow, nextColumn, matrix);

  if (gen === nextGen) {
    const totalAcumulations = accumulations + 1;
    if (totalAcumulations >= SEQUENCE_LENGTH) {
      return true;
    }

    return genValidator(nextGen, nextRow, nextColumn, matrix, validationType, accumulations + 1);
  }

  return false;
};

const validateGen = (row, dnaSegment, matrix) => {
  let mutantFlag = false;
  let foundSequances = 0;

  for (let column = 0; column < dnaSegment.length; column++) {
    const gen = getMatrixPositionValue(row, column, matrix);
    const evaluationFactor = dnaSegment.length - SEQUENCE_LENGTH;
    if (evaluationFactor < 1) {
      break;
    }
    const diagonalMutant = genValidator(gen, row, column, matrix, VALIDATION_TYPES.DIAGONAL);
    if (diagonalMutant) {
      foundSequances += 1;
    }
    const nextMutant = genValidator(gen, row, column, matrix, VALIDATION_TYPES.NEXT);
    if (nextMutant) {
      foundSequances += 1;
    }
    const downMutant = genValidator(gen, row, column, matrix, VALIDATION_TYPES.DOWN);
    if (downMutant) {
      foundSequances += 1;
    }

    if (foundSequances > 1) {
      mutantFlag = true;
      break;
    }
  }

  return mutantFlag;
};

const isMutant = (dnaSequence) => {
  let mutanFlag = false;
  for (let row = 0; row < dnaSequence.length; row++) {
    const dnaSegment = dnaSequence[row];
    const evaluationFactor = dnaSegment.length - SEQUENCE_LENGTH;
    mutanFlag = validateGen(row, dnaSegment, dnaSequence);
    if (mutanFlag || evaluationFactor < 1) {
      break;
    }
  }

  return mutanFlag;
};

export default { isMutant };
