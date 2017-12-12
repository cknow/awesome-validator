import { AbstractRule } from './abstract-rule';
import { DateTime } from './date-time';
import { NotOptional } from './not-optional';
import { NumberVal } from './number-val';
import { StringType } from './string-type';

export abstract class AbstractInterval extends AbstractRule {

    /**
     * Parse.
     */
    public static parse(input: any): any {
        if (new NumberVal().validate(input)) {
            return input;
        }

        if (new StringType().validate(input) && String(input).length === 1) {
            return input;
        }

        if (new DateTime().validate(input)) {
            return DateTime.parse(input);
        }

        return input;
    }

    /**
     * AbstractInterval.
     */
    public constructor(public readonly interval?: any, public readonly inclusive: boolean = true) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (!new NotOptional().validate(this.interval)) {
            return true;
        }

        return this.validateInterval(
            AbstractInterval.parse(input),
            AbstractInterval.parse(this.interval)
        );
    }

    /**
     * Validate interval.
     */
    protected abstract validateInterval(input: any, interval: any): boolean;
}
