const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let allCats = [];
  for (i = 0; i < matrix.length; i++) {
    for (y = 0; y < matrix[i].length; y++) {
      if (matrix[i][y] === '^^') {
        allCats.push(matrix[i][y])
      }
    }
  }
    return allCats.length;
}





module.exports = {
  countCats
};
