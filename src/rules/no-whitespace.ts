import { AbstractRule } from './abstract-rule';
import { NullType } from './null-type';
import { Scalar } from './scalar';

export class NoWhitespace extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new NullType().validate(input) || (new Scalar().validate(input) && !/\s/.test(input));
    }
}
