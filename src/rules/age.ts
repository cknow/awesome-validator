import { subYears } from 'date-fns';

import { AbstractRule } from './abstract-rule';
import { Between } from './between';
import { DateFormat } from './date-format';

export class Age extends AbstractRule {

    /**
     * Age.
     */
    public constructor(
        public readonly min: number = 18,
        public readonly max?: number,
        public readonly format?: string
    ) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const date: Date | null = DateFormat.parse(input, this.format);

        return !!date && new Between(
            this.max ? subYears(new Date(), this.max).setHours(0, 0, 0) : null,
            this.min ? subYears(new Date(), this.min).setHours(23, 59, 59) : null
        ).validate(date);
    }
}

export default Age;
