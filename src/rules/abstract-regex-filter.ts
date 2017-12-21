import { AbstractFilter } from './abstract-filter';
import { Regex } from './regex';

export abstract class AbstractRegexFilter extends AbstractFilter {

    /**
     * Validate Clean.
     */
    protected validateClean(input: string): boolean {
        return new Regex(this.getPattern()).validate(input);
    }

    /**
     * Get pattern.
     */
    protected abstract getPattern(): string | RegExp;
}
