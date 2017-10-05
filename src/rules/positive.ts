import { AbstractRule } from './abstract-rule';

export class Positive extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return input > 0;
    }
}
