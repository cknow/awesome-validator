import { AbstractRule } from './abstract-rule';

export class Identical extends AbstractRule {

    /**
     * Identical.
     */
    public constructor(public readonly compareTo: any) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return JSON.stringify(input) === JSON.stringify(this.compareTo);
    }
}
