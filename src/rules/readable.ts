import * as fs from 'fs';

import { AbstractTryCatch } from './abstract-try-catch';

export class Readable extends AbstractTryCatch {

    /**
     * Validate Function.
     */
    protected validateFunction(input: any): boolean {
        fs.accessSync(input, fs.constants.R_OK);

        return true;
    }
}
