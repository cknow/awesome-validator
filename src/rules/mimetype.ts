import { lookup } from 'mime-types';

import { AbstractRule } from './abstract-rule';

export class Mimetype extends AbstractRule {

    /**
     * Mimetype.
     */
    public constructor(public readonly mimetype: string) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return lookup(input) === this.mimetype;
    }
}
