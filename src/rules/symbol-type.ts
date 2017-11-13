import { AbstractRule } from './abstract-rule';
import { TypeOf } from './type-of';

export class SymbolType extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new TypeOf(/symbol/i).validate(input);
    }
}
