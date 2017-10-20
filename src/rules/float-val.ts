import { AbstractRule } from './abstract-rule';
import { FloatType } from './float-type';

export class FloatVal extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const val: number = Number.parseFloat(input);

        return !Number.isNaN(input) && new FloatType().validate(val);
    }
}
