import { StringType } from './string-type';
import { Xdigit } from './xdigit';

export class HexRgbColor extends Xdigit {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (!new StringType().validate(input)) {
            return false;
        }

        let inputString: string = String(input);

        if (inputString.indexOf('#') === 0) {
            inputString = inputString.substr(1);
        }

        if (inputString.length !== 3 && inputString.length !== 6) {
            return false;
        }

        return super.validate(inputString);
    }
}
