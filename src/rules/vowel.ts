import { AbstractFilter } from './abstract-filter';

export class Vowel extends AbstractFilter {

    /**
     * Validate Clean.
     */
    public validateClean(input: string): boolean {
        return /^(\s|[aeiou])*$/i.test(input);
    }
}
