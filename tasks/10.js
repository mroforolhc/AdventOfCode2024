import getInput from "../get-input.js";

function getCountTrails(map, i, j, visited) {
    // Требуется только для части 1. Для части 2 необходимо закомментировать.
    // if (visited.includes(`${i}${j}`)) return 0;
    // visited.push(`${i}${j}`);

    let count = 0;

    if (map[i][j] === 9) return 1;

    if (map[i + 1]?.[j] === map[i][j] + 1) count += getCountTrails(map, i + 1, j, visited);
    if (map[i - 1]?.[j] === map[i][j] + 1) count += getCountTrails(map, i - 1, j, visited);
    if (map[i][j + 1] === map[i][j] + 1) count += getCountTrails(map, i, j + 1, visited);
    if (map[i][j - 1] === map[i][j] + 1) count += getCountTrails(map, i, j - 1, visited);

    return count;
}

async function task() {
    const input = await getInput(10);

    const map = input.split('\n').map((row) => row.split('').map((num) => Number(num)));
    map.pop();

    let answer = 0;
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[0].length; j++) {
            if (map[i][j] === 0) {
                answer += getCountTrails(map, i, j, []);
            }
        }
    }

    console.log(answer);
}

task();