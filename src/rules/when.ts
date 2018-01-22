import { Validatable } from './../validatable';
import { AbstractRule } from './abstract-rule';

export class When extends AbstractRule {

    /**
     * When.
     */
    public constructor(
        public readonly whenValidatable: Validatable,
        public readonly thenValidatable: Validatable,
        public readonly elseValidatable?: Validatable
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
