import getInput from "../get-input.js";

async function task1() {
    const input = await getInput(5);

    let [rules, updates] = input.split('\n\n');
    rules = rules.split('\n').map((rule) => rule.split('|').map((n) => Number(n)));
    updates = updates.split('\n').map((update) => update.split(',').map((n) => Number(n)));
    updates.pop();

    const correctUpdates = [];

    updates.forEach((update) => {
        let isInvalid = false;

        rules.forEach((rule) => {
            const leftRuleIndex = update.findIndex((page) => page === rule[0]);
            const rightRuleIndex = update.findIndex((page) => page === rule[1]);

            if (~leftRuleIndex && ~rightRuleIndex && leftRuleIndex > rightRuleIndex) {
                isInvalid = true;
                return;
            }
        })

        if (!isInvalid) correctUpdates.push(update);
    })

    let sum = 0;
    correctUpdates.forEach((update) => {
        sum += update[(update.length - 1) / 2];
    });

    console.log(sum);
}

async function task2() {
    const input = await getInput(5);

    let [rules, updates] = input.split('\n\n');
    rules = rules.split('\n').map((rule) => rule.split('|').map((n) => Number(n)));
    updates = updates.split('\n').map((update) => update.split(',').map((n) => Number(n)));
    updates.pop();

    const incorrectUpdates = [];

    updates.forEach((update) => {
        let isInvalid = false;
        const relatedRules = [];

        rules.forEach((rule) => {
            const leftRuleIndex = update.findIndex((page) => page === rule[0]);
            const rightRuleIndex = update.findIndex((page) => page === rule[1]);

            if (~leftRuleIndex && ~rightRuleIndex) {
                relatedRules.push(rule);

                if (leftRuleIndex > rightRuleIndex) {
                    isInvalid = true;
                }
            }
        })

        if (isInvalid) incorrectUpdates.push([update, relatedRules]);
    })

    let sum = 0;
    incorrectUpdates.forEach(([update, rules], i) => {
        const pages = [];

        update.forEach((page) => {
            pages[rules.filter((rule) => rule[1] === page).length] = page;

        })

        sum += pages[(update.length - 1) / 2];
    })

    console.log(sum);
}

// task1();
// task2();