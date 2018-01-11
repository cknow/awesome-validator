import { AbstractRule } from './abstract-rule';
import { NotOptional } from './not-optional';

export class ObjectProperty extends AbstractRule {

    /**
     * ObjectProperty.
     */
    public constructor(protected readonly property: any) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new NotOptional().validate(input) && Object.prototype.hasOwnProperty.call(input, this.property);
    }
}
