import { AbstractRule } from './abstract-rule';
import { Empty } from './empty';

export class NotEmpty extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return !new Empty().validate(input);
    }
}
