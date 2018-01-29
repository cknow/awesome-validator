import { AbstractString } from './abstract-string';

export class Isin extends AbstractString {

    /**
     * Validate string.
     */
    protected validateString(input: string): boolean {
        if (!/^[A-Z]{2}[0-9A-Z]{9}[0-9]$/.test(input)) {
            return false;
        }

        const checksumStr: string = input.replace(/[A-Z]/g, (c: string): string => parseInt(c, 36).toString());

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

        return parseInt(input.substr(input.length - 1), 10) === (10000 - sum) % 10;
    }
}

export default Isin;
