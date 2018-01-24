import { Validatable } from './../validatable';
import { AbstractWrapper } from './abstract-wrapper';
import { AnyOf } from './any-of';
import { ArrayVal } from './array-val';
import { ObjectPropertyFunction } from './object-property-function';

export class Countable extends AbstractWrapper {

    /**
     * Get Validatable.
     */
    protected getValidatable(input: any): Validatable {
        return new AnyOf(new ArrayVal(), new ObjectPropertyFunction('count'));
    }
}

export default Countable;
