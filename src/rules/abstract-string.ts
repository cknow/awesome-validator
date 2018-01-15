import { AbstractRule } from './abstract-rule';
import { StringType } from './string-type';

export abstract class AbstractString extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (!new StringType().validate(input)) {
            return false;
        }

        return this.validateString(String(input));
    }

    /**
     * Validate string.
     */
    protected abstract validateString(input: string): boolean;
}
