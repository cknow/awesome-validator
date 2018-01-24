import { Validatable } from './../validatable';
import { AbstractWrapper } from './abstract-wrapper';
import { AnyOf } from './any-of';
import { InstanceOf } from './instance-of';

export class ArrayVal extends AbstractWrapper {

    /**
     * Get Validatable.
     */
    protected getValidatable(input: any): Validatable {
        return new AnyOf(new InstanceOf(Array), new InstanceOf(Set), new InstanceOf(Map));
    }
}

export default ArrayVal;
