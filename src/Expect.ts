import { ExpectationError } from './ExpectationError';

/**
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
 * @param value The value expected not to exist.
 * @param errorMessage The optional error message displayed if expectation fails.
 * @throws {ExpectationError}
 */
export function toNotExist<T>(value: T, errorMessage?: string) {
    if (value) {
        throw new ExpectationError(errorMessage);
    }
}
