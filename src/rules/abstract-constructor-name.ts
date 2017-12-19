import { AbstractTryCatch } from './abstract-try-catch';

export abstract class AbstractConstructotName extends AbstractTryCatch {

    /**
     * Validate Function.
     */
    protected validateFunction(input: any): boolean {
        const name: string = this.getConstructorName().toLocaleLowerCase();

        return String(input.constructor.name).toLocaleLowerCase() === name;
    }

    /**
     * Get constructor name.
     */
    protected abstract getConstructorName(): string;
}
