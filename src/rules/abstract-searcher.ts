import { AbstractRule } from './abstract-rule';
import { ArrayType } from './array-type';
import { PropertyKey } from './property-key';
import { Regex } from './regex';
import { RegexType } from './regex-type';
import { Scalar } from './scalar';
import { TypeOf } from './type-of';

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

            if (this.identical && !new TypeOf(typeof searcher).validate(input)) {
                return false;
            }

            return String(searcher).search(
                RegExp(this.contains ? `${input}` : `^${input}$`, this.identical ? undefined : 'i')
            ) !== -1;
        }

        if (new ArrayType().validate(searcher)) {
            if (!this.identical && new Scalar().validate(input)) {
                return searcher.findIndex(
                    (item: any) => this.validateSearcher(item, input)
                ) !== -1;
            }

            return searcher.indexOf(input) !== -1;
        }

        if (new RegexType().validate(searcher)) {
            return new Regex(searcher).validate(input);
        }

        if (searcher instanceof Set) {
            return searcher.has(input);
        }

        if (searcher instanceof Map) {
            return searcher.has(input);
        }

        if (searcher instanceof Object && new PropertyKey().validate(input)) {
            return searcher.hasOwnProperty(input);
        }

        return searcher === input;
    }
}
