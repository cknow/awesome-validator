import { Validatable } from './../validatable';
import { AbstractWrapper } from './abstract-wrapper';
import { AnyOf } from './any-of';
import { FloatVal } from './float-val';
import { IntVal } from './int-val';

export class NumberVal extends AbstractWrapper {

    /**
     * Get Validatable.
     */
    protected getValidatable(): Validatable {
        return new AnyOf(new FloatVal(), new IntVal());
    }
}
