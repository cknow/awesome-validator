import { AbstractRule } from './abstract-rule';
import { ArrayVal } from './array-val';
import { Regex } from './regex';
import { TypeOf } from './type-of';

export class StartsWith extends AbstractRule {

    /**
     * StartsWith.
     */
    public constructor(
        public readonly startValue: any,
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
            value = Array.from(value).shift();
        }

        if (this.identical && !new TypeOf(typeof this.startValue).validate(value)) {
            return false;
        }

        return new Regex(RegExp(
            `^${String(this.startValue).replace(/([[\]().?/*{}+$^:])/g, '\\$1')}`,
            this.identical ? undefined : 'i'
        )).validate(value);
    }
}

export default StartsWith;
