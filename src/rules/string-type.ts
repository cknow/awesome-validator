import { AbstractRule } from './abstract-rule';
import { TypeOf } from './type-of';

export class StringType extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new TypeOf(/string/i).validate(input);
    }
}
