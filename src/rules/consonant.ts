import { AbstractFilter } from './abstract-filter';
import { Regex } from './regex';

export class Consonant extends AbstractFilter {

    /**
     * Validate Clean.
     */
    public validateClean(input: string): boolean {
        return new Regex(/^(\s|[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z])*$/).validate(input);
    }
}
