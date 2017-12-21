import { AbstractTryCatch } from './abstract-try-catch';

export abstract class AbstractConstructotName extends AbstractTryCatch {

    /**
     * Validate Function.
     */
    protected validateFunction(input: any): boolean {
        return String(input.constructor.name).toLocaleLowerCase() === this.getConstructorName().toLocaleLowerCase();
    }

    /**
     * Get constructor name.
     */
    protected abstract getConstructorName(): string;
}
