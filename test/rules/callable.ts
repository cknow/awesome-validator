import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Callable } from '../../src/rules/callable';

describe('Callable', () => {

    let callable: Callable;

    beforeEach(() => {
        callable = new Callable();
    });

    it('is rule', () => {
        assert.instanceOf(callable, AbstractRule);
    });

    it('values is valid', () => {
        const obj: any = {
            /**
             * Foo.
             */
            foo(): string {
                return 'foo';
            }
        };

        assert.isTrue(callable.validate((): string => 'foo'));
        assert.isTrue(callable.validate('eval'));
        assert.isTrue(callable.validate('Array.isArray'));
        assert.isTrue(callable.validate([obj, 'foo']));
    });

    it('values is not valid', () => {
        assert.isFalse(callable.validate(null));
        assert.isFalse(callable.validate(undefined));
        assert.isFalse(callable.validate([]));
        assert.isFalse(callable.validate({}));
        assert.isFalse(callable.validate(new Array('foo')));
        assert.isFalse(callable.validate(new Object({foo: 'bar'})));
        assert.isFalse(callable.validate(true));
        assert.isFalse(callable.validate(false));
        assert.isFalse(callable.validate(1));
        assert.isFalse(callable.validate(''));
        assert.isFalse(callable.validate('foo'));
    });

});
