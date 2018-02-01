import { format as formatDate, isValid, parse as parseDate, toDate } from 'date-fns';

import { AbstractRule } from './abstract-rule';

export abstract class AbstractDate extends AbstractRule {

    /**
     * Parse.
     */
    public static parse(input: any, format?: string): Date | null {
        if (typeof input !== 'string' || !format) {
            return isValid(input) ? toDate(input) : null;
        }

        const parsed: Date = parseDate(String(input), format, new Date());

        if (!isValid(parsed) || formatDate(parsed, format) !== input) {
            return null;
        }

        return parsed;
    }

    /**
     * AbstractDate.
     */
    public constructor(public readonly format?: string) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const date: Date | null = AbstractDate.parse(input, this.format);

        return !!date && this.validateDate(date);
    }

    /**
     * Validate Date.
     */
    protected abstract validateDate(date: Date): boolean;
}
