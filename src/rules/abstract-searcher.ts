import { AbstractRule } from './abstract-rule';
import { Scalar } from './scalar';

export abstract class AbstractSearcher extends AbstractRule {

    /**
     * AbstractSearcher.
     */
    public constructor(
        public readonly searcher?: any,
        public readonly contains: boolean = true,
        public readonly identical: boolean = false
    ) {
        super();
    }

    /**
     * Validate searcher.
     */
    protected validateSearcher(searcher: any, input: any): boolean {
        if (new Scalar().validate(searcher)) {
            return String(searcher).search(
                RegExp(this.contains ? `${input}` : `^${input}$`, this.identical ? undefined : 'i')
            ) !== -1;
        }

        if (Array.isArray(searcher)) {
            if (!this.identical && new Scalar().validate(input)) {
                return searcher.findIndex(
                    (item: any) => this.validateSearcher(item, input)
                ) !== -1;
            }

            return searcher.indexOf(input) !== -1;
        }

        if (searcher instanceof Set) {
            return searcher.has(input);
        }

        if (searcher instanceof Map) {
            return searcher.has(input);
        }

        if (searcher instanceof Object && /number|string|symbol/.test(typeof input)) {
            return searcher.hasOwnProperty(input);
        }

        return searcher === input;
    }
}
