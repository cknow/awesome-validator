import { AbstractRule } from './abstract-rule';
import { RegexType } from './regex-type';

export class Regex extends AbstractRule {

    /**
     * Regex.
     */
    public constructor(public readonly regexp?: string | RegExp) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (!/boolean|number|string/.test(typeof input)) {
            return false;
        }

        return new RegExp(this.getPattern()).test(String(input));
    }

    /**
     * Get pattern.
     */
    protected getPattern(): string | RegExp {
        if (!this.regexp || !new RegexType().validate(this.regexp)) {
            throw new TypeError('Invalid RegExp.');
        }

        return this.regexp;
    }
}
