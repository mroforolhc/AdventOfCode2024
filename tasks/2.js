import getInput from '../get-input.js';

function checkIsDanger(arr) {
    let isDanger = false;

    for (let i = 0; i < arr.length - 1; i++) {
        const change = Math.abs(arr[i] - arr[i + 1]);

        if ((arr[i] > arr[i + 1] !== arr[0] > arr[1]) || (change > 3 || change < 1)) {
            isDanger = true;
            break;
        }
    }

    return isDanger;
}

async function task1() {
    const input = await getInput(2);
    const rows = input.split('\n');
    rows.pop();

    let total = 0;

    rows.forEach((row) => {
        const array = row.split(' ').map(((n) => Number(n)));

        if (!checkIsDanger(array)) {
            total += 1;
        }
    });

    console.log(total);
}

async function task2() {
    const input = await getInput(2);
    const rows = input.split('\n');
    rows.pop();

    let total = 0;

    rows.forEach((row) => {
        const array = row.split(' ').map(((n) => Number(n)));

        if (checkIsDanger(array)) {
            for (let j = 0; j <= array.length; j++) {
                const newArray = array.filter((_, index) => index !== j);

                if (!checkIsDanger(newArray)) {
                    total += 1;
                    break;
                }
            }
        } else {
            total += 1;
        }
    });

    console.log(total);
}

// task1();
// task2();