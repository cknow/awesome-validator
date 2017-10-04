import { AbstractRule } from './abstract-rule';

export class Multiple extends AbstractRule {

    /**
     * Multiple
     */
    public constructor(public readonly multipleOf: number) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (this.multipleOf === 0) {
            return this.multipleOf === input;
        }

        return input % this.multipleOf === 0;
    }
}
