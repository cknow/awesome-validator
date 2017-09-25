import { Validatable } from './../validatable';
import { AbstractComposite } from './abstract-composite';

export class AnyOf extends AbstractComposite {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const rules: Validatable[] = this.getRules();

        for (const rule of rules) {
            if (rule.validate(input)) {
                return true;
            }
        }

        return false;
    }
}
