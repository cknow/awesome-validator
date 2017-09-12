import { AbstractRule } from './abstract-rule';
import { ArrayType } from './array-type';
import { ObjectType } from './object-type';
import { ObjectTypeStrict } from './object-type-strict';
import { StringType } from './string-type';

export class Empty extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if ([undefined, null, false, 0, '', '0'].indexOf(input) >= 0) {
            return true;
        }

        if (new StringType().validate(input)) {
            return input.trim().length === 0;
        }

        if (new ObjectType().validate(input)) {
            if (Object.getPrototypeOf(input) === null) {
                return true;
            }

            if (new ObjectTypeStrict().validate(input) || new ArrayType().validate(input)) {
                return Object.keys(input).length === 0;
            }
        }

        return false;
    }
}
