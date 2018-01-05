import { ObjectPropertyFunction } from './object-property-function';
import { Scalar } from './scalar';

export class StringVal extends Scalar {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return super.validate(input) || new ObjectPropertyFunction('toString').validate(input);
    }
}
