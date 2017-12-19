import * as fs from 'fs';

import { AbstractRule } from './abstract-rule';

export class Writable extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        try {
            fs.accessSync(input, fs.constants.W_OK);

            return true;
        } catch (e) {}

        return false;
    }
}
