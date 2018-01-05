import * as chardet from 'chardet';

import { AbstractRule } from './abstract-rule';
import { In } from './in';
import { Readable } from './readable';
import { StringType } from './string-type';

export class Charset extends AbstractRule {

    /**
     * Charset.
     */
    public constructor(public readonly charset: string | string[]) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (!new StringType().validate(input)) {
            return false;
        }

        const rule: In = new In(this.charset, false);

        if (new Readable().validate(input)) {
            return rule.validate(chardet.detectFileSync(input));
        }

        return rule.validate(chardet.detect(new Buffer(input)));
    }
}
