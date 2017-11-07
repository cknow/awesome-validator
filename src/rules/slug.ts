import { AbstractRule } from './abstract-rule';
import { AllOf } from './all-of';
import { Contains } from './contains';
import { Not } from './not';
import { Regex } from './regex';
export class Slug extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new AllOf(
            new Not(new Contains('--')),
            new Regex(/^[0-9a-z\-]+$/),
            new Not(new Regex(/^-|-$/))
        ).validate(input);
    }
}
