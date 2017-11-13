import { AbstractRule } from './abstract-rule';
import { TypeOf } from './type-of';

export class SymbolVal extends AbstractRule {

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return new TypeOf(/number|string|symbol|undefined/i).validate(input);
    }
}
