import { Luhn } from './luhn';
import { Regex } from './regex';

export class CreditCard extends Luhn {

    /**
     * Services.
     */
    protected services: Map<string, RegExp> = new Map([
        ['American Express', /^3[47]\d{13}$/],
        ['Diners Club', /^3(?:0[0-5]|[68]\d)\d{11}$/],
        ['Discover', /^6(?:011|5\d{2})\d{12}$/],
        ['JCB', /^(?:2131|1800|35\d{3})\d{11}$/],
        ['MasterCard', /(5[1-5]|2[2-7])\d{14}$/],
        ['Visa', /^4\d{12}(?:\d{3})?$/]
    ]);

    /**
     * CreditCard.
     */
    public constructor(public readonly serviceKey?: string) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (!super.validate(input)) {
            return false;
        }

        const stringInput: string = String(input).replace(/[^\d]/g, '');
        const serviceValue: RegExp | undefined = this.serviceKey ? this.services.get(this.serviceKey) : undefined;

        if (serviceValue !== undefined) {
            return new Regex(serviceValue).validate(stringInput);
        }

        for (const service of Array.from(this.services.values())) {
            if (new Regex(service).validate(stringInput)) {
                return true;
            }
        }

        return false;
    }
}
