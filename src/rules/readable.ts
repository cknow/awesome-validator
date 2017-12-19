import * as fs from 'fs';

import { AbstractRule } from './abstract-rule';

export class Readable extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        try {
            fs.accessSync(input, fs.constants.R_OK);

            return true;
        } catch (e) {}

        return false;
    }
}
