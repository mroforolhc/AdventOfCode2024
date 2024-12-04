import getInput from "../get-input.js";

async function task1() {
    const input = await getInput(4);
    const matrix = input.split('\n').map((row) => row.split(''));
    matrix.pop();

    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 'X') {
                if (matrix[i + 3] && matrix[i + 1][j] === 'M' && matrix[i + 2][j] === 'A' && matrix[i + 3][j] === 'S') sum += 1;
                if (matrix[i - 3] && matrix[i - 1][j] === 'M' && matrix[i - 2][j] === 'A' && matrix[i - 3][j] === 'S') sum += 1;
                if (matrix[i][j + 1] === 'M' && matrix[i][j + 2] === 'A' && matrix[i][j + 3] === 'S') sum += 1;
                if (matrix[i][j - 1] === 'M' && matrix[i][j - 2] === 'A' && matrix[i][j - 3] === 'S') sum += 1;
                if (matrix[i + 3] && matrix[i + 1][j + 1] === 'M' && matrix[i + 2][j + 2] === 'A' && matrix[i + 3][j + 3] === 'S') sum += 1;
                if (matrix[i + 3] && matrix[i + 1][j - 1] === 'M' && matrix[i + 2][j - 2] === 'A' && matrix[i + 3][j - 3] === 'S') sum += 1;
                if (matrix[i - 3] && matrix[i - 1][j + 1] === 'M' && matrix[i - 2][j + 2] === 'A' && matrix[i - 3][j + 3] === 'S') sum += 1;
                if (matrix[i - 3] && matrix[i - 1][j - 1] === 'M' && matrix[i - 2][j - 2] === 'A' && matrix[i - 3][j - 3] === 'S') sum += 1;
            }
        }
    }

    console.log(sum);
}

async function task2() {
    const input = await getInput(4);
    const matrix = input.split('\n').map((row) => row.split(''));
    matrix.pop();

    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i + 1] && matrix[i - 1] && matrix[i][j] === 'A') {
                if (matrix[i - 1][j - 1] === 'M' && matrix[i + 1][j + 1] === 'S' && matrix[i - 1][j + 1] === 'M' && matrix[i + 1][j - 1] === 'S') sum += 1;
                if (matrix[i + 1][j + 1] === 'M' && matrix[i - 1][j - 1] === 'S' && matrix[i - 1][j + 1] === 'M' && matrix[i + 1][j - 1] === 'S') sum += 1;
                if (matrix[i - 1][j - 1] === 'M' && matrix[i + 1][j + 1] === 'S' && matrix[i + 1][j - 1] === 'M' && matrix[i - 1][j + 1] === 'S') sum += 1;
                if (matrix[i + 1][j + 1] === 'M' && matrix[i - 1][j - 1] === 'S' && matrix[i + 1][j - 1] === 'M' && matrix[i - 1][j + 1] === 'S') sum += 1;
            }
        }
    }

    console.log(sum);
}

// task1();
// task2();