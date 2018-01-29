import { AbstractRule } from './abstract-rule';
import { Regex } from './regex';

export class Isin extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (!new Regex(/^[A-Z]{2}[0-9A-Z]{9}[0-9]$/).validate(input)) {
            return false;
        }

        const inputString: string = String(input);
        const checksumStr: string = inputString.replace(/[A-Z]/g, (c: string): string => parseInt(c, 36).toString());

        let sum: number = 0;
        let digit: string;
        let tmpNum: number;
        let shouldDouble: boolean = true;

        for (let i: number = checksumStr.length - 2; i >= 0; i--) {
            digit = checksumStr.substring(i, (i + 1));
            tmpNum = parseInt(digit, 10);

            if (shouldDouble) {
                tmpNum *= 2;
                sum += (tmpNum >= 10) ? tmpNum + 1 : tmpNum;
            } else {
                sum += tmpNum;
            }

            shouldDouble = !shouldDouble;
        }

        return parseInt(inputString.substr(inputString.length - 1), 10) === (10000 - sum) % 10;
    }
}

export default Isin;
