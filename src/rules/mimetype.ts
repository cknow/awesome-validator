import { lookup } from 'mime-types';

import { AbstractRule } from './abstract-rule';
import { In } from './in';

export class Mimetype extends AbstractRule {

    /**
     * Mimetype.
     */
    public constructor(public readonly mimetype: string | string[]) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const mime: string | false = lookup(input);

        return mime !== false && new In(this.mimetype, false).validate(mime);
    }
}
