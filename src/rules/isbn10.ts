import { AbstractRule } from './abstract-rule';

export class Isbn10 extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const inputString: string = String(input).replace(/[\s-]+/g, '');
        let checksum: number = 0;

        if (!/^(?:[0-9]{9}X|[0-9]{10})$/.test(inputString)) {
            return false;
        }

        for (let i: number = 0; i < 9; i++) {
            checksum += (i + 1) * Number(inputString.charAt(i));
        }

        checksum += ((inputString.charAt(9) === 'X') ? 10 : Number(inputString.charAt(9))) * 10;

        if ((checksum % 11) === 0) {
            return !!inputString;
        }

        return false;
    }
}

export default Isbn10;
