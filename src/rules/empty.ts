import { AbstractRule } from './abstract-rule';
import { ArrayVal } from './array-val';
import { In } from './in';
import { ObjectType } from './object-type';
import { ObjectTypeStrict } from './object-type-strict';
import { StringType } from './string-type';

export class Empty extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (new In([undefined, null, false, 0, ''], false).validate(input)) {
            return true;
        }

        if (new StringType().validate(input)) {
            return String(input).trim().length === 0;
        }

        if (new ArrayVal().validate(input)) {
            return Object.keys(Array.from(input)).length === 0;
        }

        if (new ObjectType().validate(input)) {
            if (Object.getPrototypeOf(input) === null) {
                return true;
            }

            if (new ObjectTypeStrict().validate(input)) {
                return Object.keys(input).length === 0;
            }
        }

        return false;
    }
}

export default Empty;
