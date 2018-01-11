import { Validatable } from './../validatable';
import { AbstractComposite } from './abstract-composite';

export class OneOf extends AbstractComposite {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return this.getRules().filter(
            (rule: Validatable) => rule.validate(input)
        ).length === 1;
    }
}
