import { ExpectationError } from './ExpectationError';

/**
 * Expect a condition to be true.
 * @param condition The condition expected to be true.
 * @param errorMessage The optional error message displayed if expectation fails.
 * @throws {ExpectationError}
 */
export function toBeTrue(condition: boolean, errorMessage?: string): void {
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
export function toBeFalse(condition: boolean, errorMessage?: string): void {
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
export function toExist<T>(value: T, errorMessage?: string): void {
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
export function toNotExist<T>(value: T, errorMessage?: string): void {
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
export function toBeAlphanumeric(value: string, errorMessage?: string): void {
    if (!alphanumeric.test(value)) {
        throw new ExpectationError(errorMessage);
    }
}

const alphanumeric = /^[0-9A-Z]+$/i;

/**
 * Expect a value to only contain characters from a range of character codes.
 * @param value The value expected to have characters from a range of character codes.
 * @param minCharCode The expected minimum character code.
 * @param maxCharCode The expected maximum character code.
 * @param errorMessage The optional error message displayed if expectation fails.
 * @throws {ExpectationError}
 */
export function toBeCharCodes(value: string, minCharCode: number, maxCharCode: number, errorMessage?: string): void {
    for (let index = 0; index < value.length; index++) {
        const charCode = value.charCodeAt(index);

        if (charCode < minCharCode || charCode > maxCharCode) {
            throw new ExpectationError(errorMessage);
        }
    }
}

/**
 * Expect a value to be an email.
 * @param email The value expected to be an email.
 * @param errorMessage The optional error message displayed if expectation fails.
 * @throws {ExpectationError}
 */
export function toBeEmail(email: string, errorMessage?: string): void {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    const match = email.match(regex);
    if(match === null || (match[0] !== email)) {
        throw new ExpectationError(errorMessage);
    }
}
