import { AbstractRule } from './abstract-rule';

export abstract class AbstractConstructotName extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return !(!input || !input.constructor || input.constructor.name !== this.getConstructorName());
    }

    /**
     * Get constructor name.
     */
    protected abstract getConstructorName(): string;
}
