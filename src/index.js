
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix===undefined) return [];

  let common_matrix = [];
  let flag = false;
  for (let i = 0; i<matrix.length; i++){
    i%2===0?flag = true:flag = false;
    
    if (!flag){
      for(let j = matrix[i].length-1;j>=0; j--)
        common_matrix.push(matrix[i][j]);
    }
    else{
      for(let j = 0;j<matrix[i].length; j++)
        common_matrix.push(matrix[i][j]);
    }
  }
  return common_matrix;
}
