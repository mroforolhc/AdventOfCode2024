import getInput from "../get-input.js";

async function task1() {
    let input = await getInput(13);
    input = input.slice(0, input.length - 1);
    input = input.split('\n\n').map((machine) => machine.split('\n').map((str) => str.match(/(\d+)/g).map((n) => Number(n))));

    let result = 0;

    input.forEach(([a, b, prize], i) => {
        let countA = 0;
        let countB = 0;

        while (countA !== 100 || countB !== 100) {
            if (countA * a[0] + countB * b[0] === prize[0] && countA * a[1] + countB * b[1] === prize[1]) {
                result += countA * 3 + countB;
                return;
            }

            countB++;

            if (countB > 100) {
                countA++;
                countB = 0;
            }
        }
    });

    console.log(result);
}

async function task2() {
    let input = await getInput(13);
    input = input.slice(0, input.length - 1);
    input = input.split('\n\n').map((machine) => machine.split('\n').map((str) => str.match(/(\d+)/g).map((n) => Number(n))));

    let result = 0;

    input.forEach(([a, b, prizeCoord], i) => {
        const prize = prizeCoord.map((coord) => 10000000000000 + coord);

        const countB = (a[0] * prize[1] - prize[0] * a[1]) / (a[0] * b[1] - b[0] * a[1]);
        const countA = (prize[1] - countB * b[1]) / a[1];

        if (Number.isInteger(countA) && Number.isInteger(countB)) result += countA * 3 + countB;

    });

    console.log(result);
}

// task1();
// task2();