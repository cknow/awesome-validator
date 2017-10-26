import { AbstractRule } from './abstract-rule';

export abstract class AbstractFilter extends AbstractRule {

    /**
     * Abstract Filter.
     */
    public constructor(public readonly additionalChars: string = '') {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        let stringInput: string = String(input);

        if (!input || stringInput === '') {
            return false;
        }

        if (this.additionalChars) {
            for (const char of this.additionalChars) {
                stringInput = stringInput.replace(char, '');
            }
        }

        if (stringInput === '') {
            return true;
        }

        return this.validateClean(stringInput);
    }

    /**
     * Validate Clean
     */
    protected abstract validateClean(input: string): boolean;
}
