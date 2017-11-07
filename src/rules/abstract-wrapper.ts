import { Validatable } from './../validatable';
import { AbstractRule } from './abstract-rule';

export abstract class AbstractWrapper extends AbstractRule {

    /**
     * AbstractWrapper.
     */
    public constructor(public readonly validatable: Validatable) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return this.validatable.validate(input);
    }
}
