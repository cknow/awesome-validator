import { AbstractRule } from './abstract-rule';
import { NumberVal } from './number-val';

export class Positive extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new NumberVal().validate(input) && input > 0;
    }
}
