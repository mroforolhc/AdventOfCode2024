import getInput from "../get-input.js";

async function task1() {
    const regexp = /mul\((\d{1,3})\,(\d{1,3})\)/g;
    const input = await getInput(3);

    const matchAll = Array.from(input.matchAll(regexp));
    const sum = matchAll.reduce((prev, curr) => prev + Number(curr[1]) * Number(curr[2]), 0);

    console.log(sum);
}

async function task2() {
    const regexp = /mul\((\d{1,3})\,(\d{1,3})\)|do\(\)|don't\(\)/g;
    const input = await getInput(3);

    let isDisabled = false;
    let sum = 0;

    const matchAll = Array.from(input.matchAll(regexp));
    matchAll.forEach((match) => {
        if (match[0] === 'do()') {
            isDisabled = false;
        } else if (match[0] === 'don\'t()') {
            isDisabled = true;
        } else {
            if (!isDisabled) {
                sum = sum + Number(match[1]) * Number(match[2])
            }
        }
    });

    console.log(sum);
}

// task1();
// task2();