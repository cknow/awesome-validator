import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Yes } from '../../src/rules/yes';

describe('Yes', () => {

    let yes: Yes;

    beforeEach(() => {
        yes = new Yes();
    });

    it('is rule', () => {
        assert.instanceOf(yes, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(yes.validate('Y'));
        assert.isTrue(yes.validate('Yea'));
        assert.isTrue(yes.validate('Yeah'));
        assert.isTrue(yes.validate('Yep'));
        assert.isTrue(yes.validate('Yes'));
        assert.isTrue(yes.validate('y'));
        assert.isTrue(yes.validate('yea'));
        assert.isTrue(yes.validate('yeah'));
        assert.isTrue(yes.validate('yep'));
        assert.isTrue(yes.validate('yes'));
    });

    it('values is not valid', () => {
        assert.isFalse(yes.validate('Si'));
        assert.isFalse(yes.validate('Sim'));
        assert.isFalse(yes.validate('Yoo'));
        assert.isFalse(yes.validate('Young'));
        assert.isFalse(yes.validate('Yy'));
    });

});
