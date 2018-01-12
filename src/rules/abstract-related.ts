import { Validatable } from './../validatable';
import { AbstractRule } from './abstract-rule';

export abstract class AbstractRelated extends AbstractRule {

    /**
     * AbstractRelated.
     */
    public constructor(
        protected readonly reference: any,
        protected readonly validator?: Validatable,
        protected readonly mandatory: boolean = true
    ) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const hasReference: boolean = this.hasReference(input);

        if (this.mandatory && !hasReference) {
            return false;
        }

        return (!this.mandatory && !hasReference) || (
            !this.validator || this.validator.validate(this.getReferenceValue(input))
        );
    }

    /**
     * Has reference.
     */
    protected abstract hasReference(input: any): boolean;

    /**
     * Get reference value.
     */
    protected abstract getReferenceValue(input: any): any;
}
