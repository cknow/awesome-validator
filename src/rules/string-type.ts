import { Validatable } from './../validatable';
import { AbstractWrapper } from './abstract-wrapper';
import { TypeOf } from './type-of';

export class StringType extends AbstractWrapper {

    /**
     * Get Validatable.
     */
    protected getValidatable(): Validatable {
        return new TypeOf(/string/i);
    }
}
