import { AbstractFilter } from './abstract-filter';
import { Regex } from './regex';

export class Punct extends AbstractFilter {

    /**
     * Validate Clean.
     */
    public validateClean(input: string): boolean {
        return new Regex(/^[\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E]+$/g).validate(input);
    }
}
