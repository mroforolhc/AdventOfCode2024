import getInput from "../get-input.js";

async function task1() {
    const input = (await getInput(9)).replace('\n', '');

    const diskMap = [];
    const onlyDigit = [];

    let id = 0;
    input.split('').forEach((num, i) => {
        const number = Number(num);
        let arr = new Array(number).fill('.');

        if (i % 2 === 0) {
            arr.fill(id);
            onlyDigit.push(...arr);

            id += 1;
        }

        diskMap.push(...arr);
    });

    let index = 0;
    let result = 0;
    diskMap.forEach((block, i) => {
        if (index >= onlyDigit.length) return;

        if (block === '.') {
            result = result + onlyDigit.pop() * i;
        } else {
            result = result + onlyDigit[index] * i;
            index += 1;
        }
    });

    console.log(result);
}

async function task2() {
    const input = (await getInput(9)).replace('\n', '');

    const diskMap = [];

    let id = 0;
    input.split('').forEach((num, i) => {
        const number = Number(num);
        let arr = new Array(number).fill('.');

        if (i % 2 === 0) {
            arr.fill(id);
            id += 1;
        }

        if (arr.length) {
            diskMap.push(arr);
        }
    });

    for (let i = diskMap.length - 1; i >= 0; i--) {
        let i2 = 0;

        if (diskMap[i][0] !== '.') {
            while (i2 < i) {
                const diffLength = diskMap[i2].length - diskMap[i].length;

                if (diskMap[i2][0] === '.' && diffLength >= 0) {
                    diskMap[i2] = diskMap[i];
                    diskMap[i] = new Array(diskMap[i].length).fill('.')

                    if (diffLength) {
                        diskMap.splice(i2 + 1, 0, new Array(diffLength).fill('.'));
                        i += 1;
                    }

                    break;
                }

                i2 += 1;
            }
        }
    }

    let compressedDisk = [];
    diskMap.forEach((arr) => compressedDisk.push(...arr));

    const result = compressedDisk.reduce((prev, curr, i) => {
        return curr !== '.' ? prev + curr * i : prev;
    }, 0);

    console.log(result);
}

// task1();
// task2();