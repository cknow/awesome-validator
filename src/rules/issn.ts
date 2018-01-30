import { AbstractRule } from './abstract-rule';
import { Regex } from './regex';

export class Issn extends AbstractRule {

    /**
     * Issn.
     */
    public constructor(
        public readonly caseSensitive: boolean = false,
        public readonly requireHyphen: boolean = false
    ) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const inputString: string = String(input);
        const regex: string = `^\\d{4}-${(this.requireHyphen ? '' : '?')}\\d{3}[\\dX]$`;

        if (!new Regex(RegExp(regex, this.caseSensitive ? undefined : 'i')).validate(inputString)) {
            return false;
        }

        const issnDigits: string = inputString.replace('-', '');
        let position: number = 8;
        let checksum: number = 0;

        for (const digit of issnDigits) {
            const digitValue: number = digit.toUpperCase() === 'X' ? 10 : +digit;
            checksum += digitValue * position;
            --position;
        }

        return checksum % 11 === 0;
    }
}

export default Issn;
