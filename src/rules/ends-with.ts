import { AbstractRule } from './abstract-rule';
import { ArrayVal } from './array-val';
import { Regex } from './regex';

export class EndsWith extends AbstractRule {

    /**
     * EndsWith.
     */
    public constructor(public readonly endValue: any, public readonly identical: boolean = false) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        let value: any = input;

        if (new ArrayVal().validate(value)) {
            value = value.reverse().shift();
        }

        /* tslint:disable:strict-type-predicates */
        if (this.identical && typeof this.endValue !== typeof value) {
            return false;
        }
        /* tslint:enable:strict-type-predicates */

        return new Regex(RegExp(`${this.endValue}$`, this.identical ? undefined : 'i')).validate(value);
    }
}
