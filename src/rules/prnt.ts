import { AbstractFilter } from './abstract-filter';
import { Regex } from './regex';

export class Prnt extends AbstractFilter {

    /**
     * Validate Clean.
     */
    public validateClean(input: string): boolean {
        return new Regex(/^[\u0020-\u007E]+$/g).validate(input);
    }
}
