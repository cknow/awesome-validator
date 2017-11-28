import * as moment from 'moment';

import { AbstractRule } from './abstract-rule';
import { IntVal } from './int-val';
import { StringType } from './string-type';

export abstract class AbstractDate extends AbstractRule {

    /**
     * AbstractDate.
     */
    public constructor(public readonly format?: moment.MomentFormatSpecification) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const date: moment.Moment = this.parseDate(input);

        return this.validateDate(date);
    }

    /**
     * Validate Date.
     */
    protected abstract validateDate(date: moment.Moment): boolean;

    /**
     * Parse Date.
     */
    private parseDate(input: any): moment.Moment {
        if (new IntVal().validate(input)) {
            return moment([input]);
        }

        if (new StringType().validate(input)) {
            return moment(input, this.format);
        }

        if (moment.isMoment(input)) {
            return input;
        }

        return moment(input);
    }
}
