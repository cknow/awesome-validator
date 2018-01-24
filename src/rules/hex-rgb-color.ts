import { AbstractString } from './abstract-string';
import { Xdigit } from './xdigit';

export class HexRgbColor extends AbstractString {

    /**
     * Validate string.
     */
    public validateString(input: string): boolean {
        let inputString: string = input;

        if (inputString.indexOf('#') === 0) {
            inputString = inputString.substr(1);
        }

        if (inputString.length !== 3 && inputString.length !== 6) {
            return false;
        }

        return new Xdigit().validate(inputString);
    }
}

export default HexRgbColor;
