import { mightFail } from "../lib/might-fail";
import { tryCatch } from "../lib/try-catch";

async function main() {
    const promise = mightFail(true);
    const { data, error } = await tryCatch(promise);

    if (error) return;

    console.log(data);
}