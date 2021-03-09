
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined) return []
  let result = []
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) {
      for (let k = 0; k < matrix[i].length; k++) {
        result.push(matrix[i][k])
      }
    } else {
      for (let j = matrix[i].length - 1; j >= 0; j--) {
        result.push(matrix[i][j])
      }
    } 
  }
  return result
}
