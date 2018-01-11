
import { Validatable } from './../validatable';
import { AbstractRule } from './abstract-rule';
import { NotOptional } from './not-optional';

export class Optional extends AbstractRule {

    /**
     * Optional.
     */
    public constructor(protected readonly validatable: Validatable) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return !new NotOptional().validate(input) || this.validatable.validate(input);
    }
}
