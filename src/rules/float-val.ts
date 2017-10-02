import { FloatType } from './float-type';

export class FloatVal extends FloatType {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        const val: number = Number.parseFloat(input);

        return !Number.isNaN(input) && super.validate(val);
    }
}
