import { FunctionType } from './function-type';
import { Scalar } from './scalar';

export class StringVal extends Scalar {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return super.validate(input) || (
            Object(input).hasOwnProperty('toString') &&
            new FunctionType().validate(input.toString)
        );
    }
}
