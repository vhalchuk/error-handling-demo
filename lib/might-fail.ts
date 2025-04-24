export async function mightFail(shouldFail: boolean) {
    if (shouldFail) {
        throw new Error("Operation failed!");
    }

    return "Operation succeeded!";
}