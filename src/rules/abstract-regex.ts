import { AbstractRule } from './abstract-rule';
import { Regex } from './regex';

export abstract class AbstractRegex extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new Regex(this.getPattern()).validate(input);
    }

    /**
     * Get pattern.
     */
    protected abstract getPattern(): string | RegExp;
}
