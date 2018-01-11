import { Validatable } from './../validatable';
import { AbstractWrapper } from './abstract-wrapper';
import { TypeOf } from './type-of';

export class FunctionType extends AbstractWrapper {

    /**
     * Get Validatable.
     */
    protected getValidatable(input: any): Validatable {
        return new TypeOf(/function/i);
    }
}
