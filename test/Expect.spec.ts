import {
    ExpectationError,
    toBeAlphanumeric,
    toBeCharCodes,
    toBeFalse,
    toBeTrue,
    toExist,
    toNotExist,
    toBeEmail
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

    describe('#toBeEmail', () => {
        test('should pass if expectation is fulfilled', () => {
            toBeEmail('email@example.com')
            toBeEmail('firstname.lastname@example.com')
            toBeEmail('email@subdomain.example.com')
            toBeEmail('firstname+lastname@example.com')
            toBeEmail('email@123.123.123.123')
            toBeEmail('email@[123.123.123.123]')
            toBeEmail('"email"@example.com')
            toBeEmail('1234567890@example.com')
            toBeEmail('email@example-one.com')
            toBeEmail('_______@example.com')
            toBeEmail('email@example.name')
            toBeEmail('email@example.museum')
            toBeEmail('email@example.co.jp')
            toBeEmail('firstname-lastname@example.com')
            toBeEmail('much.”more\ unusual”@example.com')
            toBeEmail('very.unusual.”@”.unusual.com@example.com')
            toBeEmail('very.”(),:;<>[]”.VERY.”very@\\ "very”.unusual@strange.example.com')
        })

        test('should fail if expectation is unfulfilled', () => {
            expect(() => toBeEmail('plainaddress')).toThrow(ExpectationError);
            expect(() => toBeEmail('#@%^%#$@#$@#.com')).toThrow(ExpectationError);
            expect(() => toBeEmail('@example.com')).toThrow(ExpectationError);
            expect(() => toBeEmail('Joe Smith <email@example.com>')).toThrow(ExpectationError);
            expect(() => toBeEmail('email.example.com')).toThrow(ExpectationError);
            expect(() => toBeEmail('email@example@example.com')).toThrow(ExpectationError);
            expect(() => toBeEmail('.email@example.com')).toThrow(ExpectationError);
            expect(() => toBeEmail('email.@example.com')).toThrow(ExpectationError);
            expect(() => toBeEmail('email..email@example.com')).toThrow(ExpectationError);
            expect(() => toBeEmail('あいうえお@example.com')).toThrow(ExpectationError);
            expect(() => toBeEmail('email@example.com (Joe Smith)')).toThrow(ExpectationError);
            expect(() => toBeEmail('email@example')).toThrow(ExpectationError);
            expect(() => toBeEmail('email@-example.com')).toThrow(ExpectationError);
            expect(() => toBeEmail('email@example.web')).toThrow(ExpectationError);
            expect(() => toBeEmail('email@111.222.333.44444')).toThrow(ExpectationError);
            expect(() => toBeEmail('email@example..com')).toThrow(ExpectationError);
            expect(() => toBeEmail('Abc..123@example.com')).toThrow(ExpectationError);
            expect(() => toBeEmail('”(),:;<>[\]@example.com')).toThrow(ExpectationError);
            expect(() => toBeEmail('just”not”right@example.com')).toThrow(ExpectationError);
            expect(() => toBeEmail('this\ is"really"not\allowed@example.com')).toThrow(ExpectationError);
        })
    })
});
