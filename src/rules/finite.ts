import { AbstractRule } from './abstract-rule';
import { NumberVal } from './number-val';

export class Finite extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new NumberVal().validate(input) && Number.isFinite(Number(input));
    }
}
