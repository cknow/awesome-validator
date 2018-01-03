import { AbstractRegex } from './abstract-regex';
import { StringType } from './string-type';

export class Base64 extends AbstractRegex {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new StringType().validate(input) && super.validate(input) && String(input).length % 4 === 0;
    }

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        return /^[A-Za-z0-9+/\n\r]+={0,2}$/;
    }
}
