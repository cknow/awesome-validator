import { AbstractRule } from './abstract-rule';

export class Isbn13 extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const factor: number[] = [1, 3];
        const inputString: string = String(input).replace(/[\s-]+/g, '');
        let checksum: number = 0;

        if (!/^(?:[0-9]{13})$/.test(inputString)) {
            return false;
        }

        for (let i: number = 0; i < 12; i++) {
            checksum += factor[i % 2] * Number(inputString.charAt(i));
        }

        if (Number(inputString.charAt(12)) - ((10 - (checksum % 10)) % 10) === 0) {
            return !!inputString;
        }

        return false;
    }
}

export default Isbn13;
