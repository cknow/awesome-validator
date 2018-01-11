import { Validatable } from './../validatable';
import { AbstractRule } from './abstract-rule';

export class Not extends AbstractRule {

    /**
     * Not.
     */
    public constructor(protected readonly validatable: Validatable) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return !this.validatable.validate(input);
    }
}
