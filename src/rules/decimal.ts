import { AbstractRule } from './abstract-rule';
import { In } from './in';
import { Regex } from './regex';

export class Decimal extends AbstractRule {

    /**
     * Decimal.
     */
    public constructor(
        public readonly locale?: string,
        public readonly forceDecimal: boolean = false,
        public readonly decimalDigits: string = '1,'
    ) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const inputString: string = String(input);
        const regex: Regex = new Regex(
            `^[-+]?([0-9]+)?(${this.getDecimal()}[0-9]{${this.decimalDigits}})${this.forceDecimal ? '' : '?'}$`
        );

        return ['', '-', '+'].indexOf(inputString.replace(/ /g, '')) === -1 && regex.validate(inputString);
    }

    /**
     * Get decimal.
     */
    protected getDecimal(): string {
        if (this.locale) {
            const dotDecimal: string []  = [
                'en-AU',
                'en-GB',
                'en-HK',
                'en-IN',
                'en-NZ',
                'en-US',
                'en-ZA',
                'en-ZM'
            ];

            if (new In(dotDecimal, false).validate(this.locale)) {
                return '\\.';
            }

            const commaDecimal: string[] = [
                'bg-BG',
                'cs-CZ',
                'da-DK',
                'de-DE',
                'el-GR',
                'es-ES',
                'fr-FR',
                'it-IT',
                'hu-HU',
                'nb-NO',
                'nn-NO',
                'nl-NL',
                'pl-Pl',
                'pt-BR',
                'pt-PT',
                'ru-RU',
                'sr-RS@latin',
                'sr-RS',
                'sv-SE',
                'tr-TR',
                'uk-UA'
            ];

            if (new In(commaDecimal, false).validate(this.locale)) {
                return '\\,';
            }

            const arDecimal: string[] = [
                'ar-AE',
                'ar-BH',
                'ar-DZ',
                'ar-EG',
                'ar-IQ',
                'ar-JO',
                'ar-KW',
                'ar-LB',
                'ar-LY',
                'ar-MA',
                'ar-QM',
                'ar-QA',
                'ar-SA',
                'ar-SD',
                'ar-SY',
                'ar-TN',
                'ar-YE'
            ];

            if (new In(arDecimal, false).validate(this.locale)) {
                return '\\٫';
            }
        }

        return '[\.\,\٫]';
    }
}

export default Decimal;
