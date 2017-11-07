import { AbstractRule } from './abstract-rule';
import { TypeOf } from './type-of';

export class NumberType extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new TypeOf(/number/i).validate(input);
    }
}
