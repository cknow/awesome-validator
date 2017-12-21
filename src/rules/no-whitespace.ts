import { NotOptional } from './not-optional';
import { Scalar } from './scalar';

export class NoWhitespace extends NotOptional {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return !super.validate(input) || (new Scalar().validate(input) && !/\s/.test(input));
    }
}
