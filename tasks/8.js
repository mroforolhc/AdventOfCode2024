import getInput from "../get-input.js";

async function task1() {
    const input = await getInput(8);
    const map = input.split('\n').map((row) => row.split(''));
    map.pop();

    const hash = {};
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] !== '.') {
                hash[map[i][j]] ? hash[map[i][j]].push([i, j]) : hash[map[i][j]] = [[i, j]];
            }
        }
    }

    const antinodes = [];
    Object.entries(hash).forEach(([_, coords]) => {
        for (let i = 0; i < coords.length; i++) {
            for (let j = 0; j < coords.length; j++) {
                if (i == j) continue;

                let ii, jj;
                if (coords[i][0] > coords[j][0]) {
                    ii = coords[j][0] - Math.abs(coords[i][0] - coords[j][0]);
                } else {
                    ii = coords[j][0] + Math.abs(coords[i][0] - coords[j][0]);
                }

                if (coords[i][1] > coords[j][1]) {
                    jj = coords[j][1] - Math.abs(coords[i][1] - coords[j][1]);
                } else {
                    jj = coords[j][1] + Math.abs(coords[i][1] - coords[j][1]);
                }

                if (ii >= 0 && ii < map.length && jj >= 0 && jj < map.length) {
                    antinodes.push([ii, jj].toString());
                }
            }
        }
    });

    const set = new Set(antinodes);
    console.log(set.size);
}

async function task2() {
    const input = await getInput(8);
    const map = input.split('\n').map((row) => row.split(''));
    map.pop();

    const hash = {};
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] !== '.') {
                hash[map[i][j]] ? hash[map[i][j]].push([i, j]) : hash[map[i][j]] = [[i, j]];
            }
        }
    }

    const antinodes = [];
    Object.entries(hash).forEach(([_, coords]) => {
        for (let i = 0; i < coords.length; i++) {
            if (coords.length > 1) antinodes.push(coords[i].toString());

            for (let j = 0; j < coords.length; j++) {
                if (i == j) continue;

                let ii = coords[j][0];
                let jj = coords[j][1];
                while (ii >= 0 && ii < map.length && jj >= 0 && jj < map.length) {
                    antinodes.push([ii, jj].toString());

                    if (coords[i][0] > coords[j][0]) {
                        ii = ii - Math.abs(coords[i][0] - coords[j][0]);
                    } else {
                        ii = ii + Math.abs(coords[i][0] - coords[j][0]);
                    }

                    if (coords[i][1] > coords[j][1]) {
                        jj = jj - Math.abs(coords[i][1] - coords[j][1]);
                    } else {
                        jj = jj + Math.abs(coords[i][1] - coords[j][1]);
                    }
                }
            }
        }
    });

    const set = new Set(antinodes);
    console.log(set.size);
}

task1();
// task2();