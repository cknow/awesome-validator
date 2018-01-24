import { FloatType } from './float-type';

export class FloatVal extends FloatType {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return !Number.isNaN(input) && super.validate(Number.parseFloat(input));
    }
}

export default FloatVal;
