import { type Result, err, ok } from "./neverthrow";

export async function mightFail(shouldFail: boolean): Promise<Result<string, { message: "Operation failed!" }>> {
    if (shouldFail) {
        return err({
            message: "Operation failed!"
        });
    }

    return ok("Operation succeeded!");
}