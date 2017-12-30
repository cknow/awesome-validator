import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Label } from '../../src/rules/label';

describe('Label', () => {

    let label: Label;

    beforeEach(() => {
        label = new Label();
    });

    it('is rule', () => {
        assert.instanceOf(label, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(label.validate('_'));
        assert.isTrue(label.validate('foo'));
        assert.isTrue(label.validate('f00'));
        assert.isTrue(label.validate('_5a25378bed85f'));
        assert.isTrue(label.validate('a5a25378bed85f'));
        assert.isTrue(label.validate('_5A25378BED85F'));
        assert.isTrue(label.validate('A5A25378BED85F'));
    });

    it('values is not valid', () => {
        assert.isFalse(label.validate(null));
        assert.isFalse(label.validate(undefined));
        assert.isFalse(label.validate('%'));
        assert.isFalse(label.validate('*'));
        assert.isFalse(label.validate('-'));
        assert.isFalse(label.validate('f-o-o-'));
        assert.isFalse(label.validate('\n'));
        assert.isFalse(label.validate('\r'));
        assert.isFalse(label.validate('\t'));
        assert.isFalse(label.validate(' '));
        assert.isFalse(label.validate('f o o'));
        assert.isFalse(label.validate('0ne'));
        assert.isFalse(label.validate('0_ne'));
        assert.isFalse(label.validate('35a2537e6ea1d6'));
        assert.isFalse(label.validate('1544832632'));
        assert.isFalse(label.validate(0));
        assert.isFalse(label.validate(1));
        assert.isFalse(label.validate([]));
        assert.isFalse(label.validate({}));
        assert.isFalse(label.validate(new Array('foo')));
        assert.isFalse(label.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(label.validate(new Foo()));
    });

});
