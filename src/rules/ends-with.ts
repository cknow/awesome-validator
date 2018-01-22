import { AbstractRule } from './abstract-rule';
import { ArrayVal } from './array-val';
import { Regex } from './regex';
import { TypeOf } from './type-of';

export class EndsWith extends AbstractRule {

    /**
     * EndsWith.
     */
    public constructor(
        public readonly endValue: any,
        public readonly identical: boolean = false
    ) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        let value: any = input;

        if (new ArrayVal().validate(value)) {
            value = Array.from(value).reverse().shift();
        }

        if (this.identical && !new TypeOf(typeof this.endValue).validate(value)) {
            return false;
        }

        return new Regex(RegExp(
            `${String(this.endValue).replace(/([[\]().?/*{}+$^:])/g, '\\$1')}$`,
            this.identical ? undefined : 'i'
        )).validate(value);
    }
}
