import { AbstractRule } from './abstract-rule';
import { ArrayVal } from './array-val';
import { ObjectTypeStrict } from './object-type-strict';

export class Identical extends AbstractRule {

    /**
     * Identical.
     */
    public constructor(public readonly compareTo: any) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (new ObjectTypeStrict().validate(input) || new ArrayVal().validate(input)) {
            return JSON.stringify(input) === JSON.stringify(this.compareTo);
        }

        return input === this.compareTo;
    }
}

export default Identical;
