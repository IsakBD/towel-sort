module.exports = function towelSort(matrix) {

    if (matrix) {
        if (matrix.length !== 0) {
            var str = '';
            for (let i = 0; i < matrix.length; i++) {
                let currentMatrix = matrix[i];
                if (i % 2 === 0) {
                    for (let j = 0; j < currentMatrix.length; j++) {
                        if (i === matrix.length - 1 && j === currentMatrix.length - 1) {
                            str = str + currentMatrix[j];
                        } else {
                            str = str + currentMatrix[j] + ',';
                        }
                    }
                } else {
                    for (let j = currentMatrix.length - 1; j >= 0; j--) {
                        if (i === matrix.length - 1 && j === 0) {
                            str = str + currentMatrix[j];
                        } else {
                            str = str + currentMatrix[j] + ',';
                        }
                    }
                }
            }
            var arr = str.split(',');
            return arr;
        }
        else {
            return matrix;
        }
    }
    else {
        return [];
    }
}
