import { AbstractRule } from './abstract-rule';

export abstract class AbstractConstructotName extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const name: string = this.getConstructorName().toLowerCase();

        return !(!input || !input.constructor || String(input.constructor.name).toLowerCase() !== name);
    }

    /**
     * Get constructor name.
     */
    protected abstract getConstructorName(): string;
}
