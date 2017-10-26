import { AbstractRule } from './abstract-rule';
import { Contains } from './contains';
import { Regex } from './regex';
export class Slug extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {

        return !(
            new Contains('--').validate(input) ||
            !new Regex(/^[0-9a-z\-]+$/).validate(input) ||
            new Regex(/^-|-$/).validate(input)
        );
    }
}
