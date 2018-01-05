import { AbstractRule } from './abstract-rule';
import { ArrayVal } from './array-val';
import { Regex } from './regex';

export class StartsWith extends AbstractRule {

    /**
     * StartsWith.
     */
    public constructor(public readonly startValue: any, public readonly identical: boolean = false) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        let value: any = input;

        if (new ArrayVal().validate(value)) {
            value = Array.from(value).shift();
        }

        /* tslint:disable:strict-type-predicates */
        if (this.identical && typeof this.startValue !== typeof value) {
            return false;
        }
        /* tslint:enable:strict-type-predicates */

        return new Regex(RegExp(`^${this.startValue}`, this.identical ? undefined : 'i')).validate(value);
    }
}
