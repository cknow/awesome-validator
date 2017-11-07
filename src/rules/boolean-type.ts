import { AbstractRule } from './abstract-rule';
import { TypeOf } from './type-of';

export class BooleanType extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new TypeOf(/boolean/i).validate(input);
    }
}
