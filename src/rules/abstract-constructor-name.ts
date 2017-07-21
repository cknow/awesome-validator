import { AbstractRule } from './abstract-rule';

export abstract class AbstractConstructotName extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const name: string = this.getConstructorName().toLocaleUpperCase();

        return !(!input || !input.constructor || String(input.constructor.name).toLocaleUpperCase() !== name);
    }

    /**
     * Get constructor name.
     */
    protected abstract getConstructorName(): string;
}
