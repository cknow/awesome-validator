import { AbstractRule } from './abstract-rule';
import { IntVal } from './int-val';

export class PerfectSquare extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new IntVal().validate(input) && Math.floor(Math.sqrt(input)) === Math.sqrt(input);
    }
}
