import { ExpectationError } from './ExpectationError';

/**
 * Expect that a condition is true.
 * @param condition The condition expected to be true.
 * @param errorMessage The optional error message displayed if expectation fails.
 * @throws {ExpectationError}
 */
export function toBeTrue(condition: boolean, errorMessage?: string) {
    if (!condition) {
        throw new ExpectationError(errorMessage);
    }
}

/**
 * Expect that a condition is false.
 * @param condition The condition expected to be false.
 * @param errorMessage The optional error message displayed if expectation fails.
 * @throws {ExpectationError}
 */
export function toBeFalse(condition: boolean, errorMessage?: string) {
    if (condition) {
        throw new ExpectationError(errorMessage);
    }
}

/**
 * Expect that a value exists.
 * @param value The value expected to exist.
 * @param errorMessage The optional error message displayed if expectation fails.
 * @throws {ExpectationError}
 */
export function toExist<T>(value: T, errorMessage?: string) {
    if (!value) {
        throw new ExpectationError(errorMessage);
    }
}

/**
 * Expect that a value doesn't exist.
 * @param value The value expected not to exist.
 * @param errorMessage The optional error message displayed if expectation fails.
 * @throws {ExpectationError}
 */
export function toNotExist<T>(value: T, errorMessage?: string) {
    if (value) {
        throw new ExpectationError(errorMessage);
    }
}
