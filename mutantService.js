// Diagonal Mutan
// const adn = ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG'];
// Next Mutant
// const adn = ['TTGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG'];
// Down Mutant
// const adn = ['TTGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'ACCCTA', 'TCACTG'];
// Human
const adn = ['TTGCGA', 'CAGTGC', 'TTATGT', 'AGAATG', 'ACCCTA', 'TCACTG'];
const sequenceLength = 4;
const validationTypes = {
  DIAGONAL: 'DIAGONAL',
  NEXT: 'NEXT',
  DOWN: 'DOWN',
};

const mappedAdn = adn.map((s) => s.split(''));

const getMatrixPositionValue = (row, column, matrix) => matrix[row] ? matrix[row][column] : '';

const getValidationRowAndColumns = (row, column, validationType) => {
  const rowAndColumns = {
    row,
    column
  };

  switch (validationType) {
    case validationTypes.DIAGONAL:
      rowAndColumns.row += 1;
      rowAndColumns.column += 1;
      break;
    case validationTypes.NEXT:
      rowAndColumns.column += 1;
      break;
    case validationTypes.DOWN:
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
  const { row: nextRow, column: nextColumn} = getValidationRowAndColumns(row, column, validationType);
  const nextGen = getMatrixPositionValue (nextRow, nextColumn, matrix)

  if (gen === nextGen) {
    const totalAcumulations = accumulations + 1
    if (totalAcumulations >= sequenceLength) {
      return true
    }
    return genValidator(nextGen, nextRow, nextColumn, matrix, validationType, accumulations + 1)
  }

  return false
};

const validateGen = (row, dnaSegment, matrix) => {
  let mutantFlag = false;

  for (let column = 0; column < dnaSegment.length; column++) {
    const gen = getMatrixPositionValue(row, column, matrix);
    const evaluationFactor = dnaSegment.length - sequenceLength
    if (evaluationFactor < 1) {
      break;
    }
    const diagonalMutant = genValidator(gen, row, column, matrix, validationTypes.DIAGONAL);
    if (diagonalMutant) {
      mutantFlag = true;
      break;
    }
    const nextMutant = genValidator(gen, row, column, matrix, validationTypes.NEXT);
    if (nextMutant) {
      mutantFlag = true;
      break;
    }
    const downMutant = genValidator(gen, row, column, matrix, validationTypes.DOWN);
    if (downMutant) {
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
    const evaluationFactor = dnaSegment.length - sequenceLength
    mutanFlag = validateGen(row, dnaSegment, dnaSequence);
    if (mutanFlag || evaluationFactor < 1) {
      break;
    }
  }

  return mutanFlag;
};

console.log(Date.now())
console.log(isMutant(mappedAdn))
console.log(Date.now())
