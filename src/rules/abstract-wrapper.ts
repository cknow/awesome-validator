import { Validatable } from './../validatable';
import { AbstractRule } from './abstract-rule';

export abstract class AbstractWrapper extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return this.getValidatable().validate(input);
    }

    /**
     * Get Validatable.
     */
    protected abstract getValidatable(): Validatable;
}
