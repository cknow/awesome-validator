import { AbstractFilter } from './abstract-filter';

export class Space extends AbstractFilter {

    /**
     * Validate Clean.
     */
    public validateClean(input: string): boolean {
        return /^[\f\n\r\t\v ]+$/g.test(input);
    }
}
