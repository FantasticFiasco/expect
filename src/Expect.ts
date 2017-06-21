import { ExpectationError } from './ExpectationError';

/**
 * Expect a condition to be true.
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
 * Expect a condition to be false.
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
 * Expect a value to exist.
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
 * Expect a value not to exist.
 * @param value The value expected not to exist.
 * @param errorMessage The optional error message displayed if expectation fails.
 * @throws {ExpectationError}
 */
export function toNotExist<T>(value: T, errorMessage?: string) {
    if (value) {
        throw new ExpectationError(errorMessage);
    }
}

/**
 * Expect a value to be alphanumeric.
 * @param value The value expected to be alphanumeric.
 * @param errorMessage The optional error message displayed if expectation fails.
 * @throws {ExpectationError}
 */
export function toBeAlphanumeric(value: string, errorMessage?: string) {
    if (!alphanumeric.test(value)) {
        throw new ExpectationError(errorMessage);
    }
}

const alphanumeric = /^[0-9A-Z]+$/i;
