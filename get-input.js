import 'dotenv/config';

export default async function getInput(num) {
    const headers = new Headers();
    headers.append('Cookie', `session=${process.env.SESSION}`);

    const res = await fetch(`https://adventofcode.com/2024/day/${num}/input`, {
        credentials: "include",
        headers: headers,
    });

    const text = await res.text();
    console.log('Input:\n', text.slice(0, 100), '\n');

    return text;
}