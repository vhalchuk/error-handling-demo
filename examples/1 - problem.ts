import { mightFail } from "../lib/might-fail";

async function main() {
    const someData = await mightFail(true);
}