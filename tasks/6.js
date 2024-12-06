import getInput from "../get-input.js";

async function task1() {
    const input = await getInput(6);

    const matrix = input.split('\n').map((row) => row.split(''));
    matrix.pop();

    const size = [matrix.length, matrix[0].length];
    const isVisited = new Array(size[0]).fill(null).map(() => [...new Array(size[1]).fill(false)]);


    let sum = 0;

    let x, y = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] !== '.' && matrix[i][j] !== '#') {
                x = j;
                y = i;

                break;
            }
        }
    }

    let direction = 0;
    while (matrix[y]?.[x]) {
        if (!isVisited[y][x]) {
            sum += 1;
            isVisited[y][x] = true;
        }

        switch (direction % 4) {
            case 0: // top
                if (matrix[y - 1]?.[x] === '#') {
                    direction += 1;
                } else {
                    y -= 1;
                }

                break;
            case 1: // right
                if (matrix[y]?.[x + 1] === '#') {
                    direction += 1;
                } else {
                    x += 1;
                }

                break;
            case 2: // bottom
                if (matrix[y + 1]?.[x] === '#') {
                    direction += 1;
                } else {
                    y += 1;
                }

                break;
            default: // left
                if (matrix[y]?.[x - 1] === '#') {
                    direction += 1;
                } else {
                    x -= 1;
                }

                break;
        }
    }

    console.log(sum);
}

async function task2() {
    const input = await getInput(6);

    const matrix = input.split('\n').map((row) => row.split(''));
    matrix.pop();

    let result = 0;

    function run(map) {
        // подсчитал в первой части задания
        let x = 74;
        let y = 69;

        // 130 подсчитал в первой части задания
        const isVisited = new Array(130).fill(null).map(() => [...new Array(130).fill(false)]);
        let direction = 0;

        while (map[y]?.[x]) {
            if (!isVisited[y][x]) {
                isVisited[y][x] = [direction % 4];
            } else if (isVisited[y][x].includes(direction % 4)) {
                result += 1;
                return;
            }

            switch (direction % 4) {
                case 0: // top
                    if (map[y - 1]?.[x] === '#') {
                        direction += 1;
                    } else {
                        y -= 1;
                    }

                    break;
                case 1: // right
                    if (map[y]?.[x + 1] === '#') {
                        direction += 1;
                    } else {
                        x += 1;
                    }

                    break;
                case 2: // bottom
                    if (map[y + 1]?.[x] === '#') {
                        direction += 1;
                    } else {
                        y += 1;
                    }

                    break;
                default: // left
                    if (map[y]?.[x - 1] === '#') {
                        direction += 1;
                    } else {
                        x -= 1;
                    }

                    break;
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === '.') {
                const newMatrix = structuredClone(matrix);
                newMatrix[i][j] = '#';

                run(newMatrix);
            }
        }
    }

    console.log(result);
}

// task1();
// task2(); // 21 секунду выполняется, успех