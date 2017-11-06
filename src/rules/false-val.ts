import { AbstractRule } from './abstract-rule';
import { In } from './in';

export class FalseVal extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new In([0, false, 'off', 'no', 'n', ''], false).validate(input);
    }
}
