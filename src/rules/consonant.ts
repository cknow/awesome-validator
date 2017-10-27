import { AbstractFilter } from './abstract-filter';

export class Consonant extends AbstractFilter {

    /**
     * Validate Clean.
     */
    public validateClean(input: string): boolean {
        return /^(\s|[bcdfghjklmnpqrstvwxyz])*$/i.test(input);
    }
}
