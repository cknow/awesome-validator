import { Validatable } from './../validatable';
import { AbstractRule } from './abstract-rule';

export abstract class AbstractRelated extends AbstractRule {

    /**
     * Value.
     */
    private value: any;

    /**
     * AbstractRelated.
     */
    public constructor(
        public readonly reference: any,
        public readonly validator?: Validatable,
        public readonly mandatory: boolean = true
    ) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (!this.hasReference(input)) {
            return !this.mandatory;
        }

        this.value = this.getReferenceValue(input);

        return !this.validator || this.validator.validate(this.value);
    }

    /**
     * Get reference value stored.
     */
    public getReferenceValueStored(): any {
        return this.value;
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
