import { AbstractRule } from './abstract-rule';
import { Regex } from './regex';

export interface CurrencyOptions {
    symbol?: string,
    requireSymbol?: boolean,
    allowSpaceAfterSymbol?: boolean,
    symbolAfterDigits?: boolean,
    allowNegatives?: boolean,
    parensForNegatives?: boolean,
    negativeSignBeforeDigits?: boolean,
    negativeSignAfterDigits?: boolean,
    allowNegativeSignPlaceholder?: boolean,
    thousandsSeparator?: string,
    decimalSeparator?: string,
    allowDecimal?: boolean,
    requireDecimal?: boolean,
    digitsAfterDecimal?: number[],
    allowSpaceAfterDigits?: boolean
}

const defaultOptions: CurrencyOptions = {
    symbol: '$',
    requireSymbol: false,
    allowSpaceAfterSymbol: false,
    symbolAfterDigits: false,
    allowNegatives: true,
    parensForNegatives: false,
    negativeSignBeforeDigits: false,
    negativeSignAfterDigits: false,
    allowNegativeSignPlaceholder: false,
    thousandsSeparator: ',',
    decimalSeparator: '.',
    allowDecimal: true,
    requireDecimal: false,
    digitsAfterDecimal: [2],
    allowSpaceAfterDigits: false
};

export class Currency extends AbstractRule {

    /**
     * Currency.
     */
    public constructor(public readonly options?: CurrencyOptions) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const o: CurrencyOptions = {...defaultOptions, ...this.options};

        const decimalDigits: string = `\\d{${(o.digitsAfterDecimal || []).join('}|\\d{')}}`;
        const symbol: string = `(\\${String(o.symbol).replace(/\./g, '\\.')})${o.requireSymbol ? '' : '?'}`;
        const negative: string = '-?';
        const dollarAmount: string = `(0|[1-9]\\d*|[1-9]\\d{0,2}(\\${o.thousandsSeparator}\\d{3})*)?`;
        const decimalAmount: string = `(\\${o.decimalSeparator}(${decimalDigits}))${(o.requireDecimal ? '' : '?')}`;
        let pattern: string = dollarAmount + (o.allowDecimal || o.requireDecimal ? decimalAmount : '');

        if (o.allowNegatives && !o.parensForNegatives) {
            if (o.negativeSignAfterDigits) {
                pattern = pattern + negative;
            } else if (o.negativeSignBeforeDigits) {
                pattern = negative + pattern;
            }
        }

        if (o.allowNegativeSignPlaceholder) {
            pattern = `( (?!\\-))?${pattern}`;
        } else if (o.allowSpaceAfterSymbol) {
            pattern = ` ?${pattern}`;
        } else if (o.allowSpaceAfterDigits) {
            pattern = `${pattern}( (?!$))?`;
        }

        pattern = (o.symbolAfterDigits) ? pattern + symbol : symbol + pattern;

        if (o.allowNegatives) {
            if (o.parensForNegatives) {
                pattern = `(\\(${pattern}\\)|${pattern})`;
            } else if (!(o.negativeSignBeforeDigits || o.negativeSignAfterDigits)) {
                pattern = negative + pattern;
            }
        }

        return new Regex(`^(?!-? )(?=.*\\d)${pattern}$`).validate(input);
    }
}

export default Currency;
