import { FunctionType } from './function-type';
import { Scalar } from './scalar';

export class StringVal extends Scalar {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (super.validate(input)) {
            return true;
        }

        return Object(input).hasOwnProperty('toString') && new FunctionType().validate(input.toString);
    }
}
