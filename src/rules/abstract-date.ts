import * as moment from 'moment';

import { AbstractRule } from './abstract-rule';
import { BooleanType } from './boolean-type';
import { NumberVal } from './number-val';
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

        return date.isValid() && this.validateDate(date);
    }

    /**
     * Validate Date.
     */
    protected abstract validateDate(date: moment.Moment): boolean;

    /**
     * Parse Date.
     */
    private parseDate(input: any): moment.Moment {
        if (new NumberVal().validate(input)) {
            if (moment([input]).isValid()) {
                return moment([input]);
            }

            return moment.unix(Number(input));
        }

        if (new StringType().validate(input)) {
            return moment(input, this.format);
        }

        if (new BooleanType().validate(input)) {
            return moment();
        }

        return moment(input);
    }
}
