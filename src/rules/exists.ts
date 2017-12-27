import { existsSync } from 'fs';

import { AbstractTryCatch } from './abstract-try-catch';

export class Exists extends AbstractTryCatch {

    /**
     * Validate Function.
     */
    protected validateFunction(input: any): boolean {
        return  existsSync(input);
    }
}
