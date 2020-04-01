import {
    ExpectationError,
    toBeAlphanumeric,
    toBeCharCodes,
    toBeFalse,
    toBeTrue,
    toExist,
    toNotExist
} from './../src';

describe('expect', () => {

    const errorMessage = 'Some error message';

    describe('#toBeTrue', () => {
        test('should pass if expectation is fulfilled', () => {
            toBeTrue(true);
        });

        test('should fail if expectation is unfulfilled', () => {
            expect(() => toBeTrue(false, errorMessage)).toThrow(ExpectationError);
        });
    });

    describe('#toBeFalse', () => {
        test('should pass if expectation is fulfilled', () => {
            toBeFalse(false);
        });

        test('should fail if expectation is unfulfilled', () => {
            expect(() => toBeFalse(true, errorMessage)).toThrow(ExpectationError);
        });
    });

    describe('#toExist', () => {
        test('should pass if expectation is fulfilled', () => {
            toExist(true);
            toExist(-1);
            toExist(1);
            toExist('a');
            toExist(new Object());
        });

        test('should fail if expectation is unfulfilled', () => {
            expect(() => toExist(false, errorMessage)).toThrow(ExpectationError);
            expect(() => toExist(null, errorMessage)).toThrow(ExpectationError);
            expect(() => toExist(undefined, errorMessage)).toThrow(ExpectationError);
            expect(() => toExist(0, errorMessage)).toThrow(ExpectationError);
            expect(() => toExist(NaN, errorMessage)).toThrow(ExpectationError);
            expect(() => toExist('', errorMessage)).toThrow(ExpectationError);
        });
    });

    describe('#toNotExist', () => {
        test('should pass if expectation is fulfilled', () => {
            toNotExist(false);
            toNotExist(null);
            toNotExist(undefined);
            toNotExist(0);
            toNotExist(NaN);
            toNotExist('');
        });

        test('should fail if expectation is unfulfilled', () => {
            expect(() => toNotExist(true, errorMessage)).toThrow(ExpectationError);
            expect(() => toNotExist(-1, errorMessage)).toThrow(ExpectationError);
            expect(() => toNotExist(1, errorMessage)).toThrow(ExpectationError);
            expect(() => toNotExist('a', errorMessage)).toThrow(ExpectationError);
            expect(() => toNotExist(new Object(), errorMessage)).toThrow(ExpectationError);
        });
    });

    describe('#toBeAlphanumeric', () => {
        test('should pass if expectation is fulfilled', () => {
            toBeAlphanumeric('0');
            toBeAlphanumeric('9');
            toBeAlphanumeric('a');
            toBeAlphanumeric('A');
            toBeAlphanumeric('z');
            toBeAlphanumeric('Z');
            toBeAlphanumeric('a0');
            toBeAlphanumeric('a9');
            toBeAlphanumeric('z0');
            toBeAlphanumeric('z9');
            toBeAlphanumeric('0a');
            toBeAlphanumeric('9a');
            toBeAlphanumeric('0z');
            toBeAlphanumeric('9z');
        });

        // Dummy

        test('should fail if expectation is unfulfilled', () => {
            expect(() => toBeAlphanumeric('', errorMessage)).toThrow(ExpectationError);
            expect(() => toBeAlphanumeric(' ', errorMessage)).toThrow(ExpectationError);
            expect(() => toBeAlphanumeric(' 0', errorMessage)).toThrow(ExpectationError);
            expect(() => toBeAlphanumeric('0 ', errorMessage)).toThrow(ExpectationError);
            expect(() => toBeAlphanumeric(' 9', errorMessage)).toThrow(ExpectationError);
            expect(() => toBeAlphanumeric('9 ', errorMessage)).toThrow(ExpectationError);
            expect(() => toBeAlphanumeric(' a', errorMessage)).toThrow(ExpectationError);
            expect(() => toBeAlphanumeric('a ', errorMessage)).toThrow(ExpectationError);
            expect(() => toBeAlphanumeric(' z', errorMessage)).toThrow(ExpectationError);
            expect(() => toBeAlphanumeric('z ', errorMessage)).toThrow(ExpectationError);
        });
    });

    describe('#toBeCharCodes', () => {
        test('should pass if expectation is fulfilled', () => {
            toBeCharCodes(String.fromCharCode(65), 65, 90);
            toBeCharCodes(String.fromCharCode(90), 65, 90);
            toBeCharCodes(String.fromCharCode(90, 90), 65, 90);
        });

        test('should fail if expectation is unfulfilled', () => {
            expect(() => toBeCharCodes(String.fromCharCode(64), 65, 90, errorMessage)).toThrow(ExpectationError);
            expect(() => toBeCharCodes(String.fromCharCode(91), 65, 90, errorMessage)).toThrow(ExpectationError);
            expect(() => toBeCharCodes(String.fromCharCode(65, 91), 65, 90, errorMessage)).toThrow(ExpectationError);
            expect(() => toBeCharCodes(String.fromCharCode(64, 90), 65, 90, errorMessage)).toThrow(ExpectationError);
        });
    });
});
