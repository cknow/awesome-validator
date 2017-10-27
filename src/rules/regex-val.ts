import { AbstractRule } from './abstract-rule';

export class RegexVal extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        try {
            RegExp(input);

            return true;
        } catch (e) {}

        return false;
    }
}
