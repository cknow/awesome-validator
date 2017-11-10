import { AbstractRule } from './abstract-rule';
import { IntVal } from './int-val';

export class Even extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new IntVal().validate(input) && input % 2 === 0;
    }
}
