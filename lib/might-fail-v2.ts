import { err, ok } from "./neverthrow";

export async function mightFail(shouldFail: boolean) {
    if (shouldFail) {
        return err(new Error("Operation failed!"));
    }

    return ok("Operation succeeded!");
}