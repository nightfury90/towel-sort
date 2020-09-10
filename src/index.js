
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined || matrix.length == 0) return [];

  const sortedMatrix = matrix.map((item, index) => {
    if (index % 2 == 1) {
      item = item.sort((a, b) => b - a);
    }
    return item;
  }).toString().split(',');

  const result = sortedMatrix.map((item) => parseInt(item));

  return result;
}
