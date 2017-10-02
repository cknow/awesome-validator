import { AbstractRule } from './abstract-rule';
import { StringType } from './string-type';

export abstract class AbstractSearcher extends AbstractRule {

    /**
     * Abstract searcher.
     */
    public constructor(public readonly searcher?: any) {
        super();
    }

    /**
     * Validate searcher.
     */
    protected validateSearcher(searcher: any, input: any): boolean {
        if (new StringType().validate(searcher)) {
            return String(searcher).indexOf(input) !== - 1;
        }

        if (Array.isArray(searcher)) {
            return searcher.indexOf(input) !== -1;
        }

        if (searcher instanceof Set) {
            return searcher.has(input);
        }

        if (searcher instanceof Map) {
            return searcher.has(input);
        }

        if (searcher instanceof Object) {
            return searcher.hasOwnProperty(input);
        }

        return false;
    }
}
