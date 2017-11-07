import { AbstractRule } from './abstract-rule';
import { NumberVal } from './number-val';

export class Positive extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (!new NumberVal().validate(input)) {
            return false;
        }

        return input > 0;
    }
}
