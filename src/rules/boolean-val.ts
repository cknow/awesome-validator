import { AbstractRule } from './abstract-rule';
import { FalseVal } from './false-val';
import { TrueVal } from './true-val';

export class BooleanVal extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new TrueVal().validate(input) || new FalseVal().validate(input);
    }
}
