import getInput from "../get-input.js";

function calculate(exepted, nums, index, acc) {
    if (nums.length === index + 1) {
        return exepted === acc;
    }

    return calculate(exepted, nums, index + 1, nums[index + 1] + acc)
        || calculate(exepted, nums, index + 1, nums[index + 1] * acc)

        // Только для второй части
        || calculate(exepted, nums, index + 1, Number(String(acc) + String(nums[index + 1])))
}

async function task() {
    const input = await getInput(7);

    const tests = input.split('\n').map((test) => {
        const splitTest = test.split(': ');

        if (splitTest.length === 2) {
            return [Number(splitTest[0]), splitTest[1].split(' ').map((num) => Number(num))];
        }
    });
    tests.pop();

    let result = 0;
    tests.forEach(([exepted, nums]) => {
        if (calculate(exepted, nums, 0, nums[0])) {
            result += exepted;
        };
    });

    console.log(result);
}

task();
