import { Validatable } from './../validatable';
import { AbstractRule } from './abstract-rule';

export class When extends AbstractRule {

    /**
     * When.
     */
    public constructor(
        protected readonly whenValidatable: Validatable,
        protected readonly thenValidatable: Validatable,
        protected readonly elseValidatable?: Validatable
    ) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (this.whenValidatable.validate(input)) {
            return this.thenValidatable.validate(input);
        }

        if (this.elseValidatable) {
            return this.elseValidatable.validate(input);
        }

        return false;
    }
}
