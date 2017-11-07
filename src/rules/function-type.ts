import { AbstractRule } from './abstract-rule';
import { TypeOf } from './type-of';

export class FunctionType extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new TypeOf(/function/i).validate(input);
    }
}
