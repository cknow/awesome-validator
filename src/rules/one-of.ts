import { Validatable } from './../validatable';
import { AbstractComposite } from './abstract-composite';

export class OneOf extends AbstractComposite {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const rules: Validatable[] = this.getRules();
        let rulesPassedCount: number = 0;

        for (const rule of rules) {
            if (rule.validate(input)) {
                rulesPassedCount++;
            }
        }

        return rulesPassedCount === 1;
    }
}
