import { AbstractRule } from './abstract-rule';

export abstract class AbstractTryCatch extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        try {
            return this.validateFunction(input);
        } catch (e) {}

        return false;
    }

    /**
     * Validate Function.
     */
    protected abstract validateFunction(input: any): boolean;
}
