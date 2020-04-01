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
        it('should pass if expectation is fulfilled', () => {
            toBeTrue(true);
        });

        it('should fail if expectation is unfulfilled', () => {
            (() => toBeTrue(false, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
        });
    });

    describe('#toBeFalse', () => {
        it('should pass if expectation is fulfilled', () => {
            toBeFalse(false);
        });

        it('should fail if expectation is unfulfilled', () => {
            (() => toBeFalse(true, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
        });
    });

    describe('#toExist', () => {
        it('should pass if expectation is fulfilled', () => {
            toExist(true);
            toExist(-1);
            toExist(1);
            toExist('a');
            toExist(new Object());
        });

        it('should fail if expectation is unfulfilled', () => {
            (() => toExist(false, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => toExist(null, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => toExist(undefined, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => toExist(0, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => toExist(NaN, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => toExist('', errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
        });
    });

    describe('#toNotExist', () => {
        it('should pass if expectation is fulfilled', () => {
            toNotExist(false);
            toNotExist(null);
            toNotExist(undefined);
            toNotExist(0);
            toNotExist(NaN);
            toNotExist('');
        });

        it('should fail if expectation is unfulfilled', () => {
            (() => toNotExist(true, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => toNotExist(-1, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => toNotExist(1, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => toNotExist('a', errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => toNotExist(new Object(), errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
        });
    });

    describe('#toBeAlphanumeric', () => {
        it('should pass if expectation is fulfilled', () => {
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

        it('should fail if expectation is unfulfilled', () => {
            (() => toBeAlphanumeric('', errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => toBeAlphanumeric(' ', errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => toBeAlphanumeric(' 0', errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => toBeAlphanumeric('0 ', errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => toBeAlphanumeric(' 9', errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => toBeAlphanumeric('9 ', errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => toBeAlphanumeric(' a', errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => toBeAlphanumeric('a ', errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => toBeAlphanumeric(' z', errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => toBeAlphanumeric('z ', errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
        });
    });

    describe('#toBeCharCodes', () => {
        it('should pass if expectation is fulfilled', () => {
            toBeCharCodes(String.fromCharCode(65), 65, 90);
            toBeCharCodes(String.fromCharCode(90), 65, 90);
            toBeCharCodes(String.fromCharCode(90, 90), 65, 90);
        });

        it('should fail if expectation is unfulfilled', () => {
            (() => toBeCharCodes(String.fromCharCode(64), 65, 90, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => toBeCharCodes(String.fromCharCode(91), 65, 90, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => toBeCharCodes(String.fromCharCode(65, 91), 65, 90, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => toBeCharCodes(String.fromCharCode(64, 90), 65, 90, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
        });
    });
});
