import { AbstractServiceRegex } from './abstract-service-regex';
import { Luhn } from './luhn';

export class CreditCard extends AbstractServiceRegex {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (!new Luhn().validate(input)) {
            return false;
        }

        return super.validate(String(input).replace(/[^\d]/g, ''));
    }

    /**
     * Services.
     */
    protected get services(): Map<string, RegExp> {
        return new Map([
            ['American Express', /^3[47]\d{13}$/],
            ['Diners Club', /^3(?:0[0-5]|[68]\d)\d{11}$/],
            ['Discover', /^6(?:011|5\d{2})\d{12}$/],
            ['JCB', /^(?:2131|1800|35\d{3})\d{11}$/],
            ['MasterCard', /(5[1-5]|2[2-7])\d{14}$/],
            ['Visa', /^4\d{12}(?:\d{3})?$/]
        ]);
    }
}

export default CreditCard;
