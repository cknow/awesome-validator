import { AbstractRule } from './abstract-rule';
import { FunctionType } from './function-type';
import { Scalar } from './scalar';

export class StringVal extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        if (new Scalar().validate(input)) {
            return true;
        }

        return Object(input).hasOwnProperty('toString') && new FunctionType().validate(input.toString);
    }
}
