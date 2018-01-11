import { AbstractRule } from './abstract-rule';

export class Infinite extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return Math.abs(Number(input)) === Infinity;
    }
}
