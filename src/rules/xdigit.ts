import { AbstractFilter } from './abstract-filter';

export class Xdigit extends AbstractFilter {

    /**
     * Validate Clean.
     */
    public validateClean(input: string): boolean {
        return /^[A-Fa-f\d]+$/g.test(input);
    }
}
