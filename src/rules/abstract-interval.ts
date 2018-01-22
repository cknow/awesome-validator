import { AbstractRule } from './abstract-rule';
import { ArrayType } from './array-type';
import { DateTime } from './date-time';
import { NotOptional } from './not-optional';
import { NumberVal } from './number-val';
import { ObjectTypeStrict } from './object-type-strict';
import { StringType } from './string-type';

export abstract class AbstractInterval extends AbstractRule {

    /**
     * Parse.
     */
    public static parse(input: any): any {
        if (new NumberVal().validate(input)) {
            return input;
        }

        if (new StringType().validate(input)) {
            if (String(input).length === 1) {
                return input;
            }

            // To bytes
            const units: string[] = ['b', 'kb', 'mb', 'gb', 'tb', 'pb', 'eb', 'zb', 'yb'];
            for (const unit of units) {
                const regex: RegExp = RegExp(`^(\\d+(.\\d+)?)${unit}$`, 'i');
                const matches: RegExpExecArray | null = regex.exec(input);

                if (!regex.test(input) || !matches) {
                    continue;
                }

                return Number(matches[1]) * Math.pow(1024, units.indexOf(unit));
            }
        }

        if (new ObjectTypeStrict().validate(input) || new ArrayType().validate(input)) {
            return Object.keys(input).length;
        }

        if (input instanceof Set || input instanceof Map) {
            return input.size;
        }

        if (new DateTime().validate(input)) {
            return DateTime.parse(input).unix();
        }

        return String(input).length;
    }

    /**
     * AbstractInterval.
     */
    public constructor(
        public readonly interval?: any,
        public readonly inclusive: boolean = true
    ) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return !new NotOptional().validate(this.interval) || this.validateInterval(
            AbstractInterval.parse(input),
            AbstractInterval.parse(this.interval)
        );
    }

    /**
     * Validate interval.
     */
    protected abstract validateInterval(input: any, interval: any): boolean;
}
