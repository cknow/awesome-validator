import { AbstractRule } from './abstract-rule';

export class IntType extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return Number.isInteger(input);
    }
}
