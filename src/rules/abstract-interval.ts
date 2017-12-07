import * as moment from 'moment';

import { AbstractRule } from './abstract-rule';
import { NumberVal } from './number-val';
import { StringType } from './string-type';

export abstract class AbstractInterval extends AbstractRule {

    /**
     * AbstractInterval.
     */
    public constructor(public readonly interval: any, public readonly inclusive: boolean = true) {
        super();
    }

    /**
     * Filter Interval.
     */
    protected filterInterval(input: any): any {
        if (new NumberVal().validate(input) || (new StringType().validate(input) && String(input).length === 1)) {
            return input;
        }

        return moment(input);
    }
}
