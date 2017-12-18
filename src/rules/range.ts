import { AbstractRule } from './abstract-rule';
import { AllOf } from './all-of';
import { Max } from './max';
import { Min } from './min';

export class Range extends AbstractRule {

    /**
     * RanRangee.
     */
    public constructor(
        public readonly min?: any,
        public readonly max?: any,
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
        ).validate(input);
    }
}
