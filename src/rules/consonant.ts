import { AbstractFilter } from './abstract-filter';

export class Consonant extends AbstractFilter {

    /**
     * Validate Clean.
     */
    public validateClean(input: string): boolean {
        return /^(\s|[b-df-hj-np-tv-zB-DF-HJ-NP-TV-Z])*$/.test(input);
    }
}
