import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Graph } from '../../src/rules/graph';

describe('Graph', () => {

    let graph: Graph;

    beforeEach(() => {
        graph = new Graph();
    });

    it('is rule', () => {
        assert.instanceOf(graph, AbstractRule);
    });

    it('values is valid with additional characters', () => {
        assert.isTrue(new Graph(' ').validate('!@#$%^&*(){} abc 123'));
        assert.isTrue(new Graph(' \t\n').validate('[]?+=/\\-_|"\',<>. \t \n abc 123'));
    });

    it('values is valid', () => {
        assert.isTrue(graph.validate('LKA#@%.54'));
        assert.isTrue(graph.validate('foobar'));
        assert.isTrue(graph.validate('16-50'));
        assert.isTrue(graph.validate('123'));
        assert.isTrue(graph.validate('#$%&*_'));
    });

    it('values is not valid', () => {
        assert.isFalse(graph.validate(''));
        assert.isFalse(graph.validate(null));
        assert.isFalse(graph.validate(' '));
        assert.isFalse(graph.validate('foo\nbar'));
        assert.isFalse(graph.validate('foo\tbar'));
        assert.isFalse(graph.validate('foo bar'));
        assert.isFalse(graph.validate('( )_{}'));
        assert.isFalse(graph.validate(String()));
        assert.isFalse(graph.validate(null));
        assert.isFalse(graph.validate(undefined));
        assert.isFalse(graph.validate([]));
        assert.isFalse(graph.validate({}));
        assert.isFalse(graph.validate(new Array('foo')));
        assert.isFalse(graph.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(graph.validate(new Foo()));
    });

});
