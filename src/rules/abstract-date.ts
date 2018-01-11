import * as moment from 'moment';

import { AbstractRule } from './abstract-rule';
import { BooleanType } from './boolean-type';
import { NumberVal } from './number-val';
import { StringType } from './string-type';

export abstract class AbstractDate extends AbstractRule {

    /**
     * Parse.
     */
    public static parse(input: any, format?: moment.MomentFormatSpecification): moment.Moment {
        if (new NumberVal().validate(input)) {
            if (moment([input]).isValid()) {
                return moment([input]);
            }

            return moment.unix(Number(input));
        }

        if (new StringType().validate(input)) {
            return moment(input, format, !!format);
        }

        if (new BooleanType().validate(input)) {
            return moment();
        }

        return moment(input);
    }

    /**
     * AbstractDate.
     */
    public constructor(protected readonly format?: moment.MomentFormatSpecification) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const date: moment.Moment = AbstractDate.parse(input, this.format);

        return date.isValid() && this.validateDate(date);
    }

    /**
     * Validate Date.
     */
    protected abstract validateDate(date: moment.Moment): boolean;
}
