import { AllOf } from './all-of';
import { Contains } from './contains';
import { Not } from './not';
import { Regex } from './regex';
export class Slug extends AllOf {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        this.addRule(new Not(new Contains('--')));
        this.addRule(new Regex(/^[0-9a-z\-]+$/));
        this.addRule(new Not(new Regex(/^-|-$/)));

        return super.validate(input);
    }
}
