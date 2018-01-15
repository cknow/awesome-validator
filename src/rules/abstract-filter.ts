import { AbstractRule } from './abstract-rule';
import { Scalar } from './scalar';

export abstract class AbstractFilter extends AbstractRule {

    /**
     * AbstractFilter.
     */
    public constructor(protected readonly additionalChars: string = '') {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (!new Scalar().validate(input)) {
            return false;
        }

        let inputString: string = String(input);

        if (inputString === '') {
            return false;
        }

        if (this.additionalChars) {
            for (const char of this.additionalChars) {
                inputString = inputString.split(char).join('');
            }
        }

        if (this.filterWhiteSpace()) {
            inputString = inputString.replace(/\s/g, '');
        }

        if (inputString === '') {
            return true;
        }

        return this.validateClean(inputString);
    }

    /**
     * Filter white sapce.
     */
    protected filterWhiteSpace(): boolean {
        return false;
    }

    /**
     * Validate Clean.
     */
    protected abstract validateClean(input: string): boolean;
}
