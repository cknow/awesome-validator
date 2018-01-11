import { AbstractRule } from './abstract-rule';
import { ArrayVal } from './array-val';
import { ObjectTypeStrict } from './object-type-strict';

export class Equals extends AbstractRule {

    /**
     * Equals.
     */
    public constructor(protected readonly compareTo: any) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (new ObjectTypeStrict().validate(input) || new ArrayVal().validate(input)) {
            return require('deep-equal')(input, this.compareTo);
        }

        /* tslint:disable triple-equals */
        return input == this.compareTo;
        /* tslint:enable triple-equals */
    }
}
