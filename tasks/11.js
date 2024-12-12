import getInput from "../get-input.js";

async function task1() {
    const input = (await getInput(11)).split(' ').map((num) => Number(num));

    let stones = input;
    for (let i = 0; i < 25; i++) {
        const newStones = [];

        for (let j = 0; j < stones.length; j++) {
            if (stones[j] === 0) {
                newStones.push(1);
            } else if (String(stones[j]).length % 2 === 0) {
                const center = String(stones[j]).length / 2;
                newStones.push(Math.floor(stones[j] / Math.pow(10, center)), stones[j] % Math.pow(10, center));
            } else {
                newStones.push(stones[j] * 2024);
            }
        }

        stones = newStones;
    }

    console.log(stones.length);
}

async function task2() {
    const input = (await getInput(11)).split(' ').map((num) => Number(num));
    const cache = {};

    function getStonesCount(stone, blink) {
        if (blink === 0) return 1;

        if (cache[`${stone}:${blink}`]) {
            return cache[`${stone}:${blink}`];
        }

        let result;

        if (stone === 0) {
            result = getStonesCount(1, blink - 1);
        } else if (String(stone).length % 2 === 0) {
            const center = String(stone).length / 2;
            result = getStonesCount(Math.floor(stone / Math.pow(10, center)), blink - 1);
            result += getStonesCount(stone % Math.pow(10, center), blink - 1);
        } else {
            result = getStonesCount(stone * 2024, blink - 1);
        }

        cache[`${stone}:${blink}`] = result;
        return result;
    }

    const result = input.reduce((prev, stone) => prev + getStonesCount(stone, 75), 0);
    console.log(result);
}

// task1();
// task2();