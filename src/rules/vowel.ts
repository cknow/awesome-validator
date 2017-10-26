import { AbstractFilter } from './abstract-filter';
import { Regex } from './regex';

export class Vowel extends AbstractFilter {

    /**
     * Validate Clean.
     */
    public validateClean(input: string): boolean {
        return new Regex(/^(\s|[aeiouAEIOU])*$/).validate(input);
    }
}
