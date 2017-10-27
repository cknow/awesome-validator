import { AbstractRule } from './abstract-rule';

export abstract class AbstractConstructotName extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        try {
            const name: string = this.getConstructorName().toLocaleLowerCase();

            return String(input.constructor.name).toLocaleLowerCase() === name;
        } catch (e) {}

        return false;
    }

    /**
     * Get constructor name.
     */
    protected abstract getConstructorName(): string;
}
