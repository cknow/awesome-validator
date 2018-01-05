import { AbstractRule } from './abstract-rule';
import { ObjectTypeStrict } from './object-type-strict';

export class ObjectProperty extends AbstractRule {

    /**
     * ObjectProperty.
     */
    public constructor(public readonly property: string) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new ObjectTypeStrict().validate(input) && Object.prototype.hasOwnProperty.call(input, this.property);
    }
}
