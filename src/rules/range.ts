import { AbstractRule } from './abstract-rule';
import { AllOf } from './all-of';
import { ArrayType } from './array-type';
import { Max } from './max';
import { Min } from './min';
import { NumberVal } from './number-val';
import { ObjectTypeStrict } from './object-type-strict';

export class Range extends AbstractRule {

    /**
     * Parse.
     */
    public static parse(input: any): number {
        if (new NumberVal().validate(input)) {
            return Number(input);
        }

        if (new ObjectTypeStrict().validate(input) || new ArrayType().validate(input)) {
            return Object.keys(input).length;
        }

        if (input instanceof Set || input instanceof Map) {
            return input.size;
        }

        return String(input).length;
    }

    /**
     * Length.
     */
    public constructor(
        public readonly min?: number | null,
        public readonly max?: number | null,
        public readonly inclusive: boolean = true
    ) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new AllOf(
            new Min(this.min, this.inclusive),
            new Max(this.max, this.inclusive)
        ).validate(Range.parse(input));
    }
}
