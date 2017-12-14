import * as moment from 'moment';

import { AbstractRule } from './abstract-rule';
import { AllOf } from './all-of';
import { DateTime } from './date-time';
import { Max } from './max';
import { Min } from './min';

export class Age extends AbstractRule {

    /**
     * AbstractDate.
     */
    public constructor(
        public readonly minAge: moment.DurationInputArg1 = 18,
        public readonly maxAge?: moment.DurationInputArg1,
        public readonly format?: moment.MomentFormatSpecification
    ) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const date: moment.Moment = DateTime.parse(input, this.format);

        return date.isValid() && new AllOf(
            new Min(this.maxAge ? moment().subtract(this.maxAge, 'years').hour(0).minute(0).second(0) : null),
            new Max(this.minAge ? moment().subtract(this.minAge, 'years').hour(23).minute(59).second(59) : null)
        ).validate(date);
    }
}
