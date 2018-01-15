import { AbstractString } from './abstract-string';
import { Regex } from './regex';

export class Base64 extends AbstractString {

    /**
     * Validate string.
     */
    public validateString(input: string): boolean {
        return new Regex(/^[A-Za-z0-9+/\n\r]+={0,2}$/).validate(input) && input.length % 4 === 0;
    }
}
