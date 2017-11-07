import { AbstractRule } from './abstract-rule';
import { RegexVal } from './regex-val';

export class Regex extends AbstractRule {

    /**
     * Regex.
     */
    public constructor(public readonly regexp: string | RegExp) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (!/boolean|number|string/.test(typeof input) || !new RegexVal().validate(this.regexp)) {
            return false;
        }

        return new RegExp(this.regexp).test(String(input));
    }
}
