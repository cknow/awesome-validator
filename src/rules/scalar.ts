import { AbstractRule } from './abstract-rule';
import { TypeOf } from './type-of';

export class Scalar extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new TypeOf(/boolean|number|string/i).validate(input);
    }
}
