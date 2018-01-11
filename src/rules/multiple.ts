import { AbstractRule } from './abstract-rule';
import { NumberVal } from './number-val';

export class Multiple extends AbstractRule {

    /**
     * Multiple.
     */
    public constructor(protected readonly multipleOf: number) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (!new NumberVal().validate(input)) {
            return false;
        }

        if (this.multipleOf === 0) {
            return this.multipleOf === input;
        }

        return input % this.multipleOf === 0;
    }
}
