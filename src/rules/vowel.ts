import { AbstractRegexFilter } from './abstract-regex-filter';

export class Vowel extends AbstractRegexFilter {

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /^(\s|[aeiou])*$/i;
    }
}
