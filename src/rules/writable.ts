import * as fs from 'fs';

import { AbstractTryCatch } from './abstract-try-catch';

export class Writable extends AbstractTryCatch {

    /**
     * Validate Function.
     */
    protected validateFunction(input: any): boolean {
        fs.accessSync(input, fs.constants.W_OK);

        return true;
    }
}

export default Writable;
