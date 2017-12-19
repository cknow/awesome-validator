import { AbstractTryCatch } from './abstract-try-catch';

export class RegexVal extends AbstractTryCatch {

    /**
     * Validate Function.
     */
    protected validateFunction(input: any): boolean {
        RegExp(input);

        return true;
    }
}
