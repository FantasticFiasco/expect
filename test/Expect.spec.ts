import * as chai from 'chai';

import * as expect from './../src';
import { ExpectationError } from './../src/ExpectationError';

chai.should();

describe('expect', () => {

    const errorMessage = 'Some error message';

    describe('#toBeTrue', () => {
        it('should pass if expectation is fulfilled', () => {
            expect.toBeTrue(true);
        });

        it('should fail if expectation is unfulfilled', () => {
            (() => expect.toBeTrue(false, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
        });
    });

    describe('#toBeFalse', () => {
        it('should pass if expectation is fulfilled', () => {
            expect.toBeFalse(false);
        });

        it('should fail if expectation is unfulfilled', () => {
            (() => expect.toBeFalse(true, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
        });
    });

    describe('#toExist', () => {
        it('should pass if expectation is fulfilled', () => {
            expect.toExist(true);
            expect.toExist(-1);
            expect.toExist(1);
            expect.toExist('a');
            expect.toExist(new Object());
        });

        it('should fail if expectation is unfulfilled', () => {
            (() => expect.toExist(false, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => expect.toExist(null, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => expect.toExist(undefined, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => expect.toExist(0, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => expect.toExist(NaN, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => expect.toExist('', errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
        });
    });

    describe('#toNotExist', () => {
        it('should pass if expectation is fulfilled', () => {
            expect.toNotExist(false);
            expect.toNotExist(null);
            expect.toNotExist(undefined);
            expect.toNotExist(0);
            expect.toNotExist(NaN);
            expect.toNotExist('');
        });

        it('should fail if expectation is unfulfilled', () => {
            (() => expect.toNotExist(true, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => expect.toNotExist(-1, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => expect.toNotExist(1, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => expect.toNotExist('a', errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => expect.toNotExist(new Object(), errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
        });
    });

    describe('#toBeAlphanumeric', () => {
        it('should pass if expectation is fulfilled', () => {
            expect.toBeAlphanumeric('0');
            expect.toBeAlphanumeric('9');
            expect.toBeAlphanumeric('a');
            expect.toBeAlphanumeric('A');
            expect.toBeAlphanumeric('z');
            expect.toBeAlphanumeric('Z');
            expect.toBeAlphanumeric('a0');
            expect.toBeAlphanumeric('a9');
            expect.toBeAlphanumeric('z0');
            expect.toBeAlphanumeric('z9');
            expect.toBeAlphanumeric('0a');
            expect.toBeAlphanumeric('9a');
            expect.toBeAlphanumeric('0z');
            expect.toBeAlphanumeric('9z');
        });

        it('should fail if expectation is unfulfilled', () => {
            (() => expect.toBeAlphanumeric('', errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => expect.toBeAlphanumeric(' ', errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => expect.toBeAlphanumeric(' 0', errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => expect.toBeAlphanumeric('0 ', errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => expect.toBeAlphanumeric(' 9', errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => expect.toBeAlphanumeric('9 ', errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => expect.toBeAlphanumeric(' a', errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => expect.toBeAlphanumeric('a ', errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => expect.toBeAlphanumeric(' z', errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => expect.toBeAlphanumeric('z ', errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
        });
    });

    describe('#toBeCharCodes', () => {
        it('should pass if expectation is fulfilled', () => {
            expect.toBeCharCodes(String.fromCharCode(65), 65, 90);
            expect.toBeCharCodes(String.fromCharCode(90), 65, 90);
            expect.toBeCharCodes(String.fromCharCode(90, 90), 65, 90);
        });

        it('should fail if expectation is unfulfilled', () => {
            (() => expect.toBeCharCodes(String.fromCharCode(64), 65, 90, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => expect.toBeCharCodes(String.fromCharCode(91), 65, 90, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => expect.toBeCharCodes(String.fromCharCode(65, 91), 65, 90, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
            (() => expect.toBeCharCodes(String.fromCharCode(64, 90), 65, 90, errorMessage)).should.throw(ExpectationError).with.property('message', errorMessage);
        });
    });
});
