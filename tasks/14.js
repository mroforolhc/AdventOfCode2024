import getInput from "../get-input.js";

async function task1() {
    const width = 101;
    const height = 103;
    const times = 100;

    const input = (await getInput(14));
    const robots = input.split('\n').slice(0, -1).map((robot) => robot.match(/-*\d+,-*\d+/g).map((coord) => coord.split(',').map((num) => Number(num))));

    const map = new Array(height).fill(null).map(() => [...new Array(width).fill(0)]);

    robots.forEach((robot) => {
        const [[x, y], [vx, vy]] = robot;

        let totalX = x + ((vx * times) % width);
        if (totalX < 0 || totalX >= width) totalX = Math.abs(width - Math.abs(totalX));

        let totalY = y + ((vy * times) % height);
        if (totalY < 0 || totalY >= height) totalY = Math.abs(height - Math.abs(totalY));

        map[totalY][totalX] += 1;
    })

    const midX = Math.ceil(width / 2);
    const midY = Math.ceil(height / 2);

    const quadrants = [0, 0, 0, 0];
    for (let i = 0; i < midY - 1; i++) {
        for (let j = 0; j < midX - 1; j++) {
            quadrants[0] += map[i][j];
            quadrants[1] += map[i + midY][j];
            quadrants[2] += map[i][j + midX];
            quadrants[3] += map[i + midY][j + midX];
        }
    }

    console.log(quadrants.reduce((prev, curr) => prev * curr, 1));
}

async function task2() {
    const width = 101;
    const height = 103;

    const input = (await getInput(14));
    const robots = input.split('\n').slice(0, -1).map((robot) => robot.match(/-*\d+,-*\d+/g).map((coord) => coord.split(',').map((num) => Number(num))));

    for (let time = 1; time < 10000; time++) {
        const map = new Array(height).fill(null).map(() => [...new Array(width).fill('.')]);

        robots.forEach((robot) => {
            const [[x, y], [vx, vy]] = robot;

            let totalX = x + ((vx * time) % width);
            if (totalX < 0 || totalX >= width) totalX = Math.abs(width - Math.abs(totalX));

            let totalY = y + ((vy * time) % height);
            if (totalY < 0 || totalY >= height) totalY = Math.abs(height - Math.abs(totalY));

            map[totalY][totalX] = '*';
        })

        let isFound = false;
        for (let i = 0; i < height - 3; i++) {
            for (let j = 0; j < width - 3; j++) {
                if (map[i][j] === '*' && map[i + 1][j] === '*' && map[i + 2][j] === '*' && map[i + 3][j] === '*'
                    && map[i][j + 1] === '*' && map[i + 1][j + 1] === '*' && map[i + 2][j + 1] === '*' && map[i + 3][j + 1] === '*'
                    && map[i][j + 2] === '*' && map[i + 1][j + 2] === '*' && map[i + 2][j + 2] === '*' && map[i + 3][j + 2] === '*'
                    && map[i][j + 3] === '*' && map[i + 1][j + 3] === '*' && map[i + 2][j + 3] === '*' && map[i + 3][j + 3] === '*'
                ) {
                    isFound = true;
                    console.log(time);
                    break;
                }
            }

            if (isFound) break;
        }

        if (isFound) {
            console.log(map.map((row) => row.join('')).join('\n'));
        }
    }
}

// task1();
// task2();

