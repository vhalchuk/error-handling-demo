import { mightFail } from "../lib/might-fail-v3";

async function main() {
    const result = await mightFail(true);

    if (result.isErr()) {
        console.log(result.error);
        return;
    }

    console.log(result.value);
}