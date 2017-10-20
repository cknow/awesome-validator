import { AbstractRule } from './abstract-rule';
import { FloatVal } from './float-val';
import { IntVal } from './int-val';

export class NumberVal extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new FloatVal().validate(input) || new IntVal().validate(input);
    }
}
