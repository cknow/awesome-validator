import { AbstractRule } from './abstract-rule';
import { Scalar } from './scalar';

export abstract class AbstractFilter extends AbstractRule {

    /**
     * AbstractFilter.
     */
    public constructor(public readonly additionalChars: string = '') {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (!new Scalar().validate(input)) {
            return false;
        }

        let stringInput: string = String(input);

        if (stringInput === '') {
            return false;
        }

        if (this.additionalChars) {
            for (const char of this.additionalChars) {
                stringInput = stringInput.split(char).join('');
            }
        }

        if (stringInput === '') {
            return true;
        }

        return this.validateClean(stringInput);
    }

    /**
     * Validate Clean.
     */
    protected abstract validateClean(stringInput: string): boolean;
}
