import { AbstractFilter } from './abstract-filter';

export class Prnt extends AbstractFilter {

    /**
     * Validate Clean.
     */
    public validateClean(input: string): boolean {
        return /^[\u0020-\u007E]+$/g.test(input);
    }
}
