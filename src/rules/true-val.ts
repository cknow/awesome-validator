import { AbstractRule } from './abstract-rule';
import { In } from './in';

export class TrueVal extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new In([1, true, 'on', 'yes', 'y', 's'], false).validate(input);
    }
}
