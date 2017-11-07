import { AbstractRule } from './abstract-rule';
import { In } from './in';

export class NotOptional extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return !new In([null, ''], false).validate(input);
    }
}
