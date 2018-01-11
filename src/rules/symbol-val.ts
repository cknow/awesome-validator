import { Validatable } from './../validatable';
import { AbstractWrapper } from './abstract-wrapper';
import { TypeOf } from './type-of';

export class SymbolVal extends AbstractWrapper {

    /**
     * Get Validatable.
     */
    protected getValidatable(input: any): Validatable {
        return new TypeOf(/number|string|symbol|undefined/i);
    }
}
