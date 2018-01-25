import { AbstractString } from './abstract-string';
import { Xdigit } from './xdigit';

export class MongoId extends AbstractString {

    /**
     * Validate string.
     */
    public validateString(input: string): boolean {
        return new Xdigit().validate(input) && input.length === 24;
    }
}

export default MongoId;
