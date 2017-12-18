import * as moment from 'moment';

import { AbstractRule } from './abstract-rule';
import { DateTime } from './date-time';
import { Range } from './range';

export class Age extends AbstractRule {

    /**
     * Age.
     */
    public constructor(
        public readonly min: moment.DurationInputArg1 = 18,
        public readonly max?: moment.DurationInputArg1,
        public readonly format?: moment.MomentFormatSpecification
    ) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const date: moment.Moment = DateTime.parse(input, this.format);

        return date.isValid() && new Range(
            this.max ? moment().subtract(this.max, 'years').hour(0).minute(0).second(0) : null,
            this.min ? moment().subtract(this.min, 'years').hour(23).minute(59).second(59) : null
        ).validate(date);
    }
}
