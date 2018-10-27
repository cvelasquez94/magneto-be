const { REGEX } = require('../utils/constants');
const {  
    getLeftToRightDiagonal, 
    getRightToLeftDiagonal 
} = require('../utils');

const checkMatrix = matrix => matrix.filter(string => REGEX.test(string));
const checkMatrixRight = matrix => getLeftToRightDiagonal(matrix).filter(string => REGEX.test(string));
const checkMatrixLeft = matrix => getRightToLeftDiagonal(matrix).filter(string => REGEX.test(string));
const verifiedData = dna =>  checkMatrix(dna).concat(checkMatrixRight(dna)).concat(checkMatrixLeft(dna));

module.exports = {
    verifiedData
};
