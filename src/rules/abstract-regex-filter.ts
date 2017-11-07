import { AbstractFilter } from './abstract-filter';
import { Regex } from './regex';

export abstract class AbstractRegexFilter extends AbstractFilter {

    /**
     * Validate Clean.
     */
    protected validateClean(stringInput: string): boolean {
        return new Regex(this.getPattern()).validate(stringInput);
    }

    /**
     * Get pattern.
     */
    protected abstract getPattern(): string | RegExp;
}
