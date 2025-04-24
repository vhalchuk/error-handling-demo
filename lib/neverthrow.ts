interface IResult<T, E> {
    /**
     * Used to check if a `Result` is an `OK`
     *
     * @returns `true` if the result is an `OK` variant of Result
     */
    isOk(): this is Ok<T, E>

    /**
     * Used to check if a `Result` is an `Err`
     *
     * @returns `true` if the result is an `Err` variant of Result
     */
    isErr(): this is Err<T, E>
}

export class Ok<T, E> implements IResult<T, E> {
    constructor(readonly value: T) {}

    isOk(): this is Ok<T, E> {
        return true
    }

    isErr(): this is Err<T, E> {
        return !this.isOk()
    }
}

export class Err<T, E> implements IResult<T, E> {
    constructor(readonly error: E) {}

    isOk(): this is Ok<T, E> {
        return false
    }

    isErr(): this is Err<T, E> {
        return !this.isOk()
    }
}

export type Result<T, E> = Ok<T, E> | Err<T, E>

export function ok<T, E = never>(value: T): Ok<T, E> {
    return new Ok(value)
}

export function err<T = never, E = unknown>(err: E): Err<T, E> {
    return new Err(err)
}