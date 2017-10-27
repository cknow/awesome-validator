import { AbstractFilter } from './abstract-filter';

export class Punct extends AbstractFilter {

    /**
     * Validate Clean.
     */
    public validateClean(input: string): boolean {
        return /^[\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E]+$/g.test(input);
    }
}
