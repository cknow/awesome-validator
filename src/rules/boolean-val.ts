import { Validatable } from './../validatable';
import { AbstractWrapper } from './abstract-wrapper';
import { AnyOf } from './any-of';
import { FalseVal } from './false-val';
import { TrueVal } from './true-val';

export class BooleanVal extends AbstractWrapper {

    /**
     * Get Validatable.
     */
    protected getValidatable(input: any): Validatable {
        return new AnyOf(new TrueVal(), new FalseVal());
    }
}

export default BooleanVal;
