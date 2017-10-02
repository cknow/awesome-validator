import { AbstractRule } from './abstract-rule';

export class FloatType extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return !Number.isInteger(input) && Number.isFinite(input);
    }
}
