import getInput from '../get-input.js';

async function task1() {
    const left = [];
    const right = [];
    let sum = 0;

    const input = await getInput(1);

    const rows = input.split('\n');
    rows.pop();
    rows.forEach((row) => {
        const splitRow = row.split('   ');
        left.push(Number(splitRow[0]));
        right.push(Number(splitRow[1]));
    });

    left.sort();
    right.sort();

    for (let i = 0; i < left.length; i++) {
        sum += Math.abs(left[i] - right[i]);
    }

    console.log(sum);
}

async function task2() {
    const left = [];
    const right = [];

    const input = await getInput(1);

    const rows = input.split('\n');
    rows.pop();
    rows.forEach((row) => {
        const splitRow = row.split('   ');
        left.push(Number(splitRow[0]));
        right.push(Number(splitRow[1]));
    });

    const score = left.reduce((prev, curr) => {
        return right.filter((value) => value === curr).length * curr + prev;
    }, 0);

    console.log(score);
}

// task1();
// task2();