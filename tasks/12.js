import getInput from "../get-input.js";

async function task1() {
    const input = (await getInput(12)).split('\n').map((row) => row.split(''));
    input.pop();

    const isVisited = new Array(input.length).fill(null).map(() => [...new Array(input[0].length).fill(false)]);

    function calculateRegion(i, j) {
        if (isVisited[i][j]) return [0, 0];
        isVisited[i][j] = true;

        let area = 1;
        let perimeter = 4;

        let a, p;

        if (input[i + 1]?.[j] === input[i][j]) {
            perimeter -= 1;
            [a, p] = calculateRegion(i + 1, j);
            perimeter += p;
            area += a;
        }

        if (input[i][j + 1] === input[i][j]) {
            perimeter -= 1;
            [a, p] = calculateRegion(i, j + 1);
            perimeter += p;
            area += a;
        }

        if (input[i - 1]?.[j] === input[i][j]) {
            perimeter -= 1;
            [a, p] = calculateRegion(i - 1, j);
            perimeter += p;
            area += a;
        }


        if (input[i][j - 1] === input[i][j]) {
            perimeter -= 1;
            [a, p] = calculateRegion(i, j - 1);
            perimeter += p;
            area += a;
        }

        return [area, perimeter];
    }

    let result = 0;

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[0].length; j++) {
            const [area, perimeter] = calculateRegion(i, j, 'kek');
            result += area * perimeter;
        }
    }

    console.log(result);
}

// async function task2() {
//     // const input = (await getInput(12)).split('\n').map((row) => row.split(''));
//     // const input = 'AAAA\nBBCD\nBBCC\nEEEC\n'.split('\n').map((row) => row.split(''));
//     // const input = 'OOOOO\nOXOXO\nOOOOO\nOXOXO\nOOOOO\n'.split('\n').map((row) => row.split(''));
//     const input = 'RRRRIICCFF\nRRRRIICCCF\nVVRRRCCFFF\nVVRCCCJFFF\nVVVVCJJCFE\nVVIVCCJJEE\nVVIIICJJEE\nMIIIIIJJEE\nMIIISIJEEE\nMMMISSJEEE\n'.split('\n').map((row) => row.split(''));
//     input.pop();
// }


task1();
// task2();