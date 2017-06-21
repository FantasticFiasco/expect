import * as chai from 'chai';

import * as expect from './../src';
import { ExpectationError } from './../src';

chai.should();

describe('expect', () => {

    const errorMessage = 'Some error message';

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
});
