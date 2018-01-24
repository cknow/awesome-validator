import { Validatable } from './../validatable';
import { AbstractWrapper } from './abstract-wrapper';
import { AnyOf } from './any-of';
import { ObjectPropertyFunction } from './object-property-function';
import { Scalar } from './scalar';

export class StringVal extends AbstractWrapper {

    /**
     * Get Validatable.
     */
    protected getValidatable(input: any): Validatable {
        return new AnyOf(new Scalar(), new ObjectPropertyFunction('toString'));
    }
}

export default StringVal;
